'use client'

import clsx from 'clsx'
import React from 'react'
import type { Control, FieldValues, Path } from 'react-hook-form'
import { Controller } from 'react-hook-form'

type InputProps<T extends FieldValues> = {
  id: string
  name: Path<T>
  label: string
  type?: string
  control: Control<T>
  error?: string
  disabled: boolean
}

const Input = <T extends FieldValues>({
  label,
  id,
  name,
  type,
  control,
  error,
  disabled,
}: InputProps<T>) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                id={id}
                type={type}
                autoComplete={id}
                disabled={disabled}
                className={clsx(
                  `form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6`,
                  error && 'focus:ring-rose-500',
                  disabled && 'cursor-default opacity-50',
                )}
              />
              <span className="text-red-500">{error}</span>
            </>
          )}
        />
      </div>
    </div>
  )
}

export default Input
