// console.log('hello world!')

// document.addEventListener('click', ()=>{
//     console.log('clicked')
// })

const aButton = document.getElementsByTagName('button')[0]
const anInput = document.getElementsByTagName('input')[0]
const aList = document.getElementsByTagName('ul')[0]


aButton.addEventListener('click', ()=>{

    if (anInput.value === '') {
        alert('Инпут пустой')
        return
    }
    const li = document.createElement('li')
    li.innerText = anInput.value

    console.log(li)

    aList.append(li)

})

console.log(aButton)
console.log(anInput)
console.log(aList)