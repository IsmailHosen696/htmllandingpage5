const bars = document.querySelector('.fa-bars');
const navRight = document.querySelector('.navRight');
const fonts = document.querySelector('.fonts');
const font = [
    {
        id: 1,
        font: 'Awesome',
    },
    {
        id: 2,
        font: 'Beautiful',
    },
    {
        id: 3,
        font: 'Great',
    },
]
bars.addEventListener('click', () => {
    bars.classList.toggle('fa-times');
    navRight.classList.toggle('active');
})
window.addEventListener('resize', () => {
    navRight.classList.remove('active');
    bars.classList.remove('fa-times');
})

let i = 0;
function indexfunc(index) {
    let text = font[index];
    fonts.innerHTML = text.font
}
setInterval(() => {
    if (i > font.length - 1) {
        return i = 0;
    }
    indexfunc(i);
    i++;
}, 3000);