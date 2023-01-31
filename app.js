//////////////////////////////////////////////////
// VARIABLES FOR HIDING AND SHOWING
//////////////////////////////////////////////////

const input1Container = document.getElementById('input-1-container')
const input2Container = document.getElementById('input-2-container')
const hideAndShowContainer = document.getElementById('hide-show-container')

//////////////////////////////////////////////////
// INPUT & OUTPUT VARIABLES
//////////////////////////////////////////////////

const input1 = document.getElementById('input-1-field')
const input2 = document.getElementById('input-2-field')
const output = document.getElementById('output-field')

const grayButton = document.getElementById('gray-button')

//////////////////////////////////////////////////
// HIDE AND SHOW FUNCTIONS
//////////////////////////////////////////////////

function hideFields() {
    input1Container.style.display = 'none'
    input2Container.style.display = 'none'
}

function showFields() {
    input1Container.style.display = 'block'
    input2Container.style.display = 'block'
}


hideAndShowContainer.addEventListener('click', (e) => {
    if (e.target.id === 'hide') {
        hideFields()
    }
    if (e.target.id === 'show') {
        showFields()
    }
})



//////////////////////////////////////////////////
//  ACCESSING THE INPUT VARIABLES / DOING MATH  //

//  *** Comment in/out to see functionality ***  //
//////////////////////////////////////////////////


// // Make the value of the output equal to the first input
// input1.addEventListener('input', () => {
//     output.value = input1.value
// })


// // Add input1 plus input2 
// input2.addEventListener('input', () => {
//     output.value = Number(input1.value) + (+input2.value) // you can do either Number or plus
// })


// // auto populate the output field with the 10% using the button
// grayButton.addEventListener('click', () => {
//     output.value = '15%'
// })



