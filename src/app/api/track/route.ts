import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const LOG_FILE = path.join(process.cwd(), 'mediator_visits.json')

function getVisits(): any[] {
  try {
    if (fs.existsSync(LOG_FILE)) {
      const data = fs.readFileSync(LOG_FILE, 'utf-8')
      return JSON.parse(data)
    }
  } catch (e) {
    console.error('Error reading visits log:', e)
  }
  return []
}

function saveVisits(visits: any[]) {
  try {
    fs.writeFileSync(LOG_FILE, JSON.stringify(visits, null, 2), 'utf-8')
  } catch (e) {
    console.error('Error saving visits log:', e)
  }
}

export async function GET() {
  const visits = getVisits()
  return NextResponse.json({
    success: true,
    count: visits.length,
    visits: visits
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-store, max-age=0'
    }
  })
}

export async function POST(req: NextRequest) {
  try {
    const bodyText = await req.text()
    const body = JSON.parse(bodyText)

    // Extra server-side check: if country_code provided and not US, ignore
    if (body.country_code && body.country_code !== 'US') {
      return NextResponse.json({ ignored: true, reason: 'Non-US visitor filtered out' })
    }

    const visits = getVisits()
    const newRecord = {
      id: Date.now().toString(),
      ...body,
      received_at: new Date().toISOString()
    }

    visits.unshift(newRecord)
    if (visits.length > 500) visits.pop()
    saveVisits(visits)

    return NextResponse.json({ success: true, record: newRecord }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 })
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}
