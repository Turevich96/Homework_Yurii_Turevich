'use strict';

let searchTitle;
let responsArr;
let URL = `https://www.omdbapi.com/?apikey=c549391b&s=${searchTitle}`;
let inputFilm = document.querySelector('.title');
let button = document.querySelector('.button');

// Add event button
button.addEventListener('click', clearFilmList);
button.addEventListener('click', search);

// Clearn serch 
function clearFilmList() {
    document.querySelector('section').remove()
    let list = document.createElement('section');
    document.body.append(list)
}

function search() {
    searchTitle = document.querySelector('.title').value;
    URL = `https://www.omdbapi.com/?apikey=c549391b&s=${searchTitle}`;
    getApi()
}

// fetch API 
function getApi() {

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            responsArr = data;
            for (let i = 0; i < (responsArr.Search).length; i++) {
                let filmList = new Film(responsArr.Search[i])
                filmList.print();
            }


        });

}

// Create film box
class Film {
    constructor(responsArr) {
        this.title = responsArr;

    }
    print() {
        // Print film box


        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let year = document.createElement('p')
        let type = document.createElement('p')
        let img = document.createElement('img')
        let section = document.querySelector('section')

        div.classList.add('film-box')
        img.classList.add('image')
        img.setAttribute('src', this.title.Poster)

        h2.innerText = this.title.Title
        year.innerText = this.title.Year
        type = this.title.Type

        div.append(img)
        div.append(h2)
        div.append(year)
        div.append(type)
        section.append(div);
    }

}



