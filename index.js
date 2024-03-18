const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    
    button.addEventListener('click', (e) => {
        // console.log(e)
        // console.log(e.target);
        
        // ! logic
        if (e.target.id === 'goldenrod') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'seagreen') {
            body.style.backgroundColor = 'seagreen'
        }
        if (e.target.id === 'slateblue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'salmon') {
            body.style.backgroundColor = 'salmon'
        }
    })
})