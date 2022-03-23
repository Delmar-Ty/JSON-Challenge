const url = 'assets/JSON/cards.json';
let cards = document.querySelectorAll('.card');

let list = [];

fetch(url).then(res => res.json().then(data => {
    list = data;
    cards.forEach((el, index) => {
        el.addEventListener('click', () => {
            
        })
        addInfo(index);
    });
}));

function addInfo(index) {
    let title = document.querySelectorAll('.card-title');
    title[index].textContent = list[index].name;
}