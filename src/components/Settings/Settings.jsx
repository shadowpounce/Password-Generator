import styles from './Settings.module.css'

const Settings = ({ settings, setSettings }) => {
  return (
    <div className={styles.settings}>
      <div className={styles.option}>
        Include Lowercase
        <input
          defaultChecked={settings.lowerCase}
          onChange={() => {
            if (settings.lowerCase) {
              setSettings({ ...settings, lowerCase: false })
            } else {
              setSettings({ ...settings, lowerCase: true })
            }
          }}
          type="checkbox"
          className={styles.inputCheckbox}
        />
      </div>

      <div className={styles.option}>
        Include Uppercase
        <input
          defaultChecked={settings.upperCase}
          onChange={() => {
            if (settings.upperCase) {
              setSettings({ ...settings, upperCase: false })
            } else {
              setSettings({ ...settings, upperCase: true })
            }
          }}
          type="checkbox"
          className={styles.inputCheckbox}
        />
      </div>

      <div className={styles.option}>
        Include Numbers
        <input
          defaultChecked={settings.numbers}
          onChange={() => {
            if (settings.numbers) {
              setSettings({ ...settings, numbers: false })
            } else {
              setSettings({ ...settings, numbers: true })
            }
          }}
          type="checkbox"
          className={styles.inputCheckbox}
        />
      </div>
    </div>
  )
}

export default Settings
