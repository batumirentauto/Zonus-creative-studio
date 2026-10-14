const net = require('net')
const path = require('path')
const { fork } = require('child_process')

const port = process.env.PORT || '3000'
process.env.PORT = port
process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0'

console.log(`[Zonus Entrypoint] Launching Next.js server on port ${port}...`)

const serverScript = path.join(__dirname, 'server.js')
const child = fork(serverScript, { env: process.env, stdio: 'inherit' })

child.on('exit', (code) => {
  process.exit(code || 0)
})

// Forward 8080 -> 3000 if main port is 3000 (resolves Railway default port 8080 proxying)
if (port === '3000') {
  try {
    const proxy8080 = net.createServer((socket) => {
      const client = net.createConnection({ port: 3000, host: '127.0.0.1' }, () => {
        socket.pipe(client)
        client.pipe(socket)
      })
      client.on('error', () => socket.destroy())
      socket.on('error', () => client.destroy())
    })
    proxy8080.on('error', (err) => {
      console.log('[Zonus Entrypoint] Port 8080 bridge unavailable:', err.message)
    })
    proxy8080.listen(8080, '0.0.0.0', () => {
      console.log('[Zonus Entrypoint] Dual-port bridge active: listening on 8080 -> 3000')
    })
  } catch (e) {
    // ignore
  }
}

// Forward 3000 -> 8080 if main port is 8080
if (port === '8080') {
  try {
    const proxy3000 = net.createServer((socket) => {
      const client = net.createConnection({ port: 8080, host: '127.0.0.1' }, () => {
        socket.pipe(client)
        client.pipe(socket)
      })
      client.on('error', () => socket.destroy())
      socket.on('error', () => client.destroy())
    })
    proxy3000.on('error', (err) => {
      console.log('[Zonus Entrypoint] Port 3000 bridge unavailable:', err.message)
    })
    proxy3000.listen(3000, '0.0.0.0', () => {
      console.log('[Zonus Entrypoint] Dual-port bridge active: listening on 3000 -> 8080')
    })
  } catch (e) {
    // ignore
  }
}
