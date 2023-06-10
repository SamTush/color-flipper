const button = document.querySelector('#button');
const color = document.querySelector('.color');
const body = document.querySelector('body');

let colors = ['bg-myRed', 'bg-myBlack', 'bg-myGreen', 'bg-myPink', 'bg-myCoral', 'bg-myOrange']

button.addEventListener('click', () => {
    body.className = 'font-myFont ';
    let random = Math.floor(Math.random()*(colors.length));
    body.classList.add(colors[random]);
    
    if (colors[random] === 'by-myRed') {
        color.innerHTML = '';
        color.innerHTML = 'Red';
    } else if (colors[random] === 'bg-myBlack') {
        color.innerHTML = '';
        color.innerHTML = 'Night';
    } else if ( colors[random] === 'bg-myGreen') {
        color.innerHTML = '';
        color.innerHTML = 'Green';
    } else if ( colors[random] === 'bg-myPink') {
        color.innerHTML = '';
        color.innerHTML = 'Pink';
    } else if ( colors[random] === 'bg-myCoral') {
        color.innerHTML = '';
        color.innerHTML = 'Coral';
    } else {
        color.innerHTML = '';
        color.innerHTML = 'Orange';
    }
});
