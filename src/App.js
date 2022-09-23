import { useState } from 'react'
import './App.css'
import Output from './components/Output/Output'
import Range from './components/Range/Range'
import Settings from './components/Settings/Settings'
import Button from './components/Button/Button'
import getRandomIntInclusive from './utils/getRandomIntInclusive'

function App() {
  let [settings, setSettings] = useState({
    lowerCase: false,
    upperCase: false,
    numbers: false,
  })
  let [length, setLength] = useState('16')
  let [output, setOutput] = useState('Output')

  const upperCaseLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  const lowerCaseLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  const generatePassword = () => {
    let password = ''
    for (let i = 0; i < length; i++) {
      const randomChar = String(
        generateRandomSymbol(getRandomIntInclusive(0, 2))
      )
      password += String(randomChar)
    }
    setOutput(password)
  }

  const generateRandomSymbol = (index) => {
    // eslint-disable-next-line default-case
    switch (index) {
      case 0:
        if (settings.upperCase) {
          return upperCaseLetters[
            getRandomIntInclusive(0, upperCaseLetters.length - 1)
          ]
        } else {
          return generateRandomSymbol(getRandomIntInclusive(0, 2))
        }
      case 1:
        if (settings.lowerCase) {
          return lowerCaseLetters[
            getRandomIntInclusive(0, lowerCaseLetters.length - 1)
          ]
        } else {
          return generateRandomSymbol(getRandomIntInclusive(0, 2))
        }
      case 2:
        if (settings.numbers) {
          return getRandomIntInclusive(0, 9)
        } else {
          return generateRandomSymbol(getRandomIntInclusive(0, 2))
        }
    }
  }

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <Output output={output} />
      <Range length={length} setLength={setLength} />
      <Settings settings={settings} setSettings={setSettings} />
      <Button settings={settings} generatePassword={generatePassword} />
    </div>
  )
}

export default App
