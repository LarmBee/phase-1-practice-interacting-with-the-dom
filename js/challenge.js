let counter = document.querySelector('#counter')

let count = setInterval(increment,1000)
function increment() {
    count = count % 360 + 1;
    counter.innerHTML = count
}

let add = document.querySelector('#plus')
add.addEventListener('click',addition)

function addition(){
   count = count + 1
}
addition()



// let subtract = document.querySelector('#minus')
// add.addEventListener('click',takeaway)

// function takeaway(){
//    count = count -1
//    takeaway()
// }

let pause = document.querySelector('#pause')


let input1 = document.querySelector('#comment-input').value
let result = document.querySelector('p')

let submit = document.querySelector('#comment-form')
submit.addEventListener('submit',(event)=> event.preventDefault())