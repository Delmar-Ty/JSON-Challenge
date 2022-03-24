const url = 'assets/JSON/cards.json';
let cards = document.querySelectorAll('.card');

let list = [];

fetch(url)
    .then(res => res.json())
    .then(data => {
        list = data;
        cards.forEach((el, index) => {
            addInfo(index);
            el.addEventListener('click', function() {
                document.querySelector('.map').innerHTML = `<iframe id="map-box" src="${list[this.id].map}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
                let infoList = document.querySelectorAll('.list-item');
                infoList[0].textContent = list[this.id].name;
                infoList[1].textContent = list[this.id].address;
            })
        })
    })
    .catch(err => console.error);

function addInfo(index) {
    let title = document.querySelectorAll('.card-title');
    title[index].textContent = list[index].name;
    cards[index].setAttribute('id', index);
}