const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 20;

function shadow(e){
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;
    console.log(width, height, x, y);

    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    console.log(x, y);
    console.log('al');

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 5px rgba(255, 0, 255, 0.7),
        ${xWalk * -1}px ${yWalk}px 5px rgba(0, 255, 255, 0.7),
        ${yWalk}px ${xWalk * -1}px 5px rgba(0, 255, 0, 0.7),
        ${yWalk * -1}px ${xWalk}px 5px rgba(0, 0, 255, 0.7)
    `;
}

hero.addEventListener('mousemove', shadow);