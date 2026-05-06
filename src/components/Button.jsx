const Button = ({ className = '', children, type = 'button', onClick, isDisabled }) => {
  return (
    <button
      className={`button ${className}`}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button