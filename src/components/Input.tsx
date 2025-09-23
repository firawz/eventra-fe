import React, { ReactElement } from 'react'

interface InputProps {
  label: string
  id: string
  type: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  prefix?: string
}

function Input({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  required,
  prefix
}: InputProps): ReactElement {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-lg font-bold text-gray-800 mb-2"
      >
        {label}
      </label>
      <div className="flex items-center">
        {prefix && (
          <div className="bg-gray-200 text-gray-700 px-4 py-3 rounded-l-lg border border-r-0 border-gray-300">
            {prefix}
          </div>
        )}

        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={
            prefix
              ? 'w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
              : 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
          }
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  )
}

export default Input
