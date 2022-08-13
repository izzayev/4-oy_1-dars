let moviesArray = movies.slice(0, 110);
let elInputRating = document.querySelector(".rating__value")

function normolize(array) {
    let newArray = [];

    array.forEach(item => {
        let newObject = {}

        newObject.title = item.Title.toString()
        newObject.videoUrl = `https://www.youtube.com/watch?v=${item.ytid}`
        newObject.categories = item.Categories.split("|")
        newObject.movieYear = item.movie_year
        newObject.rating = item.imdb_rating
        newObject.image = `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`



        newArray.push(newObject)
    });

    return newArray
}


let newArray = normolize(moviesArray);
let elMovieWrapper = document.querySelector(".card__section");
let elTemplate = document.querySelector("#movie__card").content;



function renderMovies(array, wrapper) {
    wrapper.innerHTML = null;

    let tempFragment = document.createDocumentFragment()
    for (const item of array) {
        let templateItem = elTemplate.cloneNode(true)

        templateItem.querySelector(".movie__img").src = item.image;
        templateItem.querySelector(".movie__title").textContent = item.title;
        templateItem.querySelector(".movie__year").textContent = item.movieYear;
        templateItem.querySelector(".movie__rating").textContent = item.rating;
        templateItem.querySelector(".movie__url").href = item.videoUrl;
        templateItem.querySelector(".movie__url").target ="_blank";


        tempFragment.appendChild(templateItem);
    }

    wrapper.appendChild(tempFragment)
}
renderMovies(newArray, elMovieWrapper);

let elForm = document.querySelector(".form")

elForm.addEventListener("submit" , function (event) {
    event.preventDefault();
    let elInput = document.querySelector(".rating__value").value
    let inputArray = []
    
    for (let i = 0; i < newArray.length; i++) {
        if(elInput <= newArray[i].rating) {
            inputArray.push(newArray[i])
        }   
    }

    renderMovies(inputArray, elMovieWrapper);

})
