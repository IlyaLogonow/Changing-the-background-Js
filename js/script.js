const button = document.getElementById('ctd__btn');
const linearGradient = document.getElementById('ctb__linear-gradient');

const linearGradientArray = [
    'linear-gradient(90deg, #f598a8, #f6edb2)', 
    'linear-gradient(90deg, #faf0cd, #fab397)',
    'linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db)',
    'linear-gradient(90deg, #cfecd0, #ffc5ca)',
    'linear-gradient(90deg, #b9deed, #efefef)',
    'linear-gradient(90deg, #aea4e3, #d3ffe8)',
    'linear-gradient(90deg, #69b7eb, #b3dbd3, #f4d6db)',
    'linear-gradient(90deg, #ee5c87, #f1a4b5, #d587b3)',
    'linear-gradient(85deg, #fb63f9, #c2e534)',
    'linear-gradient(21deg, #dd03e4, #5611ec)',
    'linear-gradient(4deg, #5462c3, #ba872c)',
    'linear-gradient(81deg, #ddb35f, #7409c7)',
    'linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)',
    'linear-gradient(3deg, #e6d16c, #16014c)',
    'linear-gradient(66deg, #e38010, #1535bf)',
    'linear-gradient(#c6e4ee 0%, #c6e4ee 40%, #fed1ae 60%, #faa0b9 70%, #cb7dcb 80%, #757ecb 100%)',
    'linear-gradient(to right, #f00, #ffa500, #ff0, #008000, #00f, #4b0082, #ee82ee)',
    'linear-gradient(to bottom, #b721ff, #2af598, #fec051, #fee140, #fa709a)',
    'linear-gradient(45deg, #F17C58, #E94584, #24AADB, #27DBB1, #FFDC18, #FF3706)',
]; 

button = addEventListener('click', () => {
    let hexColor = linearGradientArray[randomNumber()]
    document.body.style.background = hexColor;
    linearGradient.textContent = hexColor;
})

function randomNumber() {
    return Math.floor(Math.random() * linearGradientArray.length)
};  