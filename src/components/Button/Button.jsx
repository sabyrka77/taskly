import styles from './Button.module.scss'

const Button = ({ className = '', children, type = 'button', onClick, isDisabled }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button