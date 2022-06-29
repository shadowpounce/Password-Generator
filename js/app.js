const inputSlider = document.querySelector('#slider')

const lengthTitle = document.querySelector('.length__title')

const btn = document.querySelector('.btn-generate')

const lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const result = document.querySelector('.result')

const inputs = document.querySelectorAll('input')

inputs.forEach(el => el.addEventListener('click',checkInputs))

lengthTitle.dataset.length = inputSlider.value

inputSlider.value = 16

inputSlider.addEventListener('input',() => {
    lengthTitle.dataset.length = inputSlider.value
})

btn.addEventListener('click',() => {
    let passwordLength = inputSlider.value
    
    result.innerHTML = `Click generate password!`
    
    let password = []

    for (let i = 0; i < passwordLength; i++) {
        password.push(generatePassword(Math.floor(getRandomArbitrary(0,2))))
    }

    result.innerHTML = `${password.join('')}<div class="input-span"></div>`

    result.style.cursor = 'pointer'

    result.addEventListener("click", () => {
        const textarea = document.createElement("textarea")
        const password = result.textContent
        const inputSpan = document.querySelector('.input-span')

        inputSpan.classList.add('copied')
        inputSpan.innerHTML = 'Copied'

        textarea.value = password
        document.body.appendChild(textarea)

        textarea.select()
        document.execCommand("copy")
        textarea.remove()
    })
})

function generatePassword(index) {

    switch(index) {
        case Number(0):
            if (document.querySelector('#uppercase').checked) {
                return upperCaseArray[Math.floor(getRandomArbitrary(0,lowerCaseArray.length))]
                break
            } else {
                return generatePassword(Math.floor(getRandomArbitrary(0,3)))
            }
        break

        case Number(1):
            if (document.querySelector('#lowercase').checked) {
                return lowerCaseArray[Math.floor(getRandomArbitrary(0,lowerCaseArray.length))]
                break
            } else {
                return generatePassword(Math.floor(getRandomArbitrary(0,3)))
            }
        break

        case Number(2):
            if (document.querySelector('#numbers').checked) {
                return String(Math.floor(getRandomArbitrary(0,9)))
                break
            } else {
                return generatePassword(Math.floor(getRandomArbitrary(0,3)))
            }
        break
    }

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function checkInputs() {
    let uppercase = document.querySelector('#uppercase').checked
    let lowercase = document.querySelector('#lowercase').checked
    let numbers = document.querySelector('#numbers').checked

    if (!uppercase && !lowercase && !numbers) {
        btn.disabled = true
    } else {
        btn.disabled = false
    }
}
