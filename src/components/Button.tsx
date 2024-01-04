'use client'

import clsx from 'clsx'
import React from 'react'

type ButtonProps = {
  children?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  secondary?: boolean
  danger?: boolean
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  fullWidth,
  secondary,
  danger,
  disabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        `flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
        disabled && 'cursor-default opacity-50',
        fullWidth && 'w-full',
        secondary ? 'text-gray-900' : 'text-white',
        danger &&
          'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
        !secondary &&
          !danger &&
          'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600',
      )}
    >
      {children}
    </button>
  )
}

export default Button
