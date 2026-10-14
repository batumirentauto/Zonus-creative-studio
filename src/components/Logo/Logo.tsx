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
    <div className={clsx('flex items-baseline gap-2 select-none tracking-tight', className)}>
      <span className="text-[17px] font-semibold text-white tracking-[-0.03em] font-sans">
        Zonus
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
        Studio
      </span>
    </div>
  )
}
