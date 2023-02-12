const piano = document.querySelector('.piano');
const container = document.querySelector('.container');

const keys = [
    { name: 'C', octave: 0, accident: "", number: 1 },
    { name: 'C#', octave: 0, accident: '#', number: 2 },
    { name: 'D', octave: 0, accident: undefined, number: 3 },
    { name: 'D#', octave: 0, accident: "#", number: 4 },
    { name: 'E', octave: 0, accident: undefined, number: 5 },
    { name: 'F', octave: 0, accident: undefined, number: 6 },
    { name: 'F#', octave: 0, accident: "#", number: 7 },
    { name: 'G', octave: 0, accident: undefined, number: 8 },
    { name: 'G#', octave: 0, accident: "#", number: 9 },
    { name: 'A', octave: 0, accident: undefined, number: 10 },
    { name: 'A#', octave: 0, accident: "#", number: 11 },
    { name: 'B', octave: 0, accident: undefined, number: 12 },
    { name: 'C', octave: 1, accident: undefined, number: 13 },
    { name: 'C#', octave: 1, accident: '#', number: 14 },
    { name: 'D', octave: 1, accident: undefined, number: 15 },
    { name: 'D#', octave: 1, accident: "#", number: 16 },
    { name: 'E', octave: 1, accident: undefined, number: 17 },
    { name: 'F', octave: 1, accident: undefined, number: 18 },
    { name: 'F#', octave: 1, accident: "#", number: 19 },
    { name: 'G', octave: 1, accident: undefined, number: 20 },
    { name: 'G#', octave: 1, accident: "#", number: 21 },
    { name: 'A', octave: 1, accident: undefined, number: 22 },
    { name: 'A#', octave: 1, accident: "#", number: 23 },
    { name: 'B', octave: 1, accident: undefined, number: 24 },
    { name: 'С', octave: 1, accident: undefined, number: 25 },
];


const keysTemplate = (key) => {
    const whiteKey = `<div data-key=${key.number} data-octave=${key.octave} class="piano__item"></div>`;
    const accident = `<div data-key=${key.number} data-octave=${key.octave} class='piano__item--black'></div>`;
    return `<div class="key__wrap">${key.accident ? accident : whiteKey}</div>`
}


const template = keys.map(k => {
    return keysTemplate(k);
})


piano.addEventListener('mousedown', (e) => {
    const target = e.target;

    const number = target.dataset.key;

    if (number) {
        clickImitation(target);

        new Howl({
            src: [`./sounds/${number}.mp3`]
        }).play()
    }
})


function play() {
    new Howl({
        src: [`./sounds/${number}.mp3`]
    }).play()
}


function clickImitation(target) {
    target.style.transform = 'scale(0.98)';

    target.addEventListener('mouseup', () => {
        target.style.transform = 'scale(1)'
    })
}

piano.insertAdjacentHTML('beforeend', template.join(''));

