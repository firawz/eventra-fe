import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'primary',
  type = 'button'
}) => {
  const baseStyle =
    'px-4 py-2 rounded-md font-semibold transition duration-200 ease-in-out'

  const variants = {
    primary:
      'bg-eventra-purple text-white border border-eventra-purple hover:bg-eventra-dark-purple',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline:
      'border border-eventra-purple text-eventra-purple hover:bg-eventra-light-purple',
    ghost:
      'bg-white text-eventra-purple border border-eventra-purple hover:bg-eventra-light-purple'
  }

  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
