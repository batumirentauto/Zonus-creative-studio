import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <div className={clsx('flex items-center gap-2.5 font-sans select-none', className)}>
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20 font-black text-xl tracking-tighter">
        <span>Z</span>
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-lg font-black tracking-tight leading-none text-foreground flex items-center gap-1">
          ZONUS
          <span className="text-orange-500 text-xs px-1.5 py-0.5 rounded font-mono font-bold bg-orange-500/10 border border-orange-500/20">
            USA
          </span>
        </span>
        <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground leading-tight mt-0.5">
          Creative Studio
        </span>
      </div>
    </div>
  )
}
