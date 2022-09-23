import styles from './Output.module.css'

const Output = ({ output }) => {
  return (
    <>
      <div
        onClick={(event) => {
          event.target.className = styles.outputCopied
          event.target.closest('.App').querySelector('textarea').select()
          document.execCommand('copy')
          setTimeout(() => (event.target.className = styles.output), 2000)
        }}
        className={styles.output}
      >
        {output}
      </div>
      <textarea
        onChange={(event) => [(output = event.target.value)]}
        value={output}
        style={{ opacity: 0, position: 'absolute', pointerEvents: 'none' }}
      ></textarea>
    </>
  )
}

export default Output
