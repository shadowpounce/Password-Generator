import styles from './Button.module.css'

const Button = ({ generatePassword, settings }) => {
  return (
    <button
      onClick={() => {
        Object.values(settings).find((s) => s !== false)
          ? generatePassword()
          : void 0
      }}
      className={styles.btn}
    >
      Generate Password
    </button>
  )
}

export default Button
