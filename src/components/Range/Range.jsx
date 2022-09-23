import styles from './Range.module.css'

const Range = ({ length, setLength }) => {
  return (
    <div className={styles.range}>
      <span className={`${styles.labelValue} ${styles.labelValueLeft}`}>4</span>
      <span className={styles.labelValue}>32</span>
      <label className={styles.label} htmlFor="range">
        Length: {length}
      </label>
      <input
        className={styles.sliderRange}
        id="range"
        type="range"
        min="4"
        onChange={(event) => {
          setLength(String(event.target.value))
        }}
        value={length}
        max="32"
      />
    </div>
  )
}

export default Range
