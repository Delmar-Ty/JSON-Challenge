const url = 'assets/JSON/cards.json';
let cards = document.querySelectorAll('.card');

let list = [];

fetch(url).then(res => res.json().then(data => {
    list = data;
    cards.forEach((el, index) => {
        addInfo(index);
        el.addEventListener('click', function() {
            console.log(this);
            console.log(this.id);
        })
    });
}));

function addInfo(index) {
    let title = document.querySelectorAll('.card-title');
    title[index].textContent = list[index].name;
    cards[index].setAttribute('id', index);
}