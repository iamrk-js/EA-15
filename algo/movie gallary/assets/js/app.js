
let cl = console.log;

const addMoviesModal = document.getElementById('addMoviesModal');
const myModal = document.getElementById('myModal');
const backDrop = document.getElementById('backDrop');
const addMovieBtn = document.getElementById('addMovieBtn');
const movieName = document.getElementById('movieName');
const imgUrl = document.getElementById('imgUrl');
const rating = document.getElementById('rating');
const movieHolder = document.getElementById('movieHolder');
let MyClose = Array.from(document.querySelectorAll('.MyClose'))

let movieArray = [];
// let addMovieModalHandler = () => {
//     myModal.classList.add('visible')
//     backDrop.classList.add('visible')
// }
// const hideMovieModalHandler = () => {
//     myModal.classList.remove('visible')
//     backDrop.classList.remove('visible')
// }

const toggleBackDrop = () => {
    backDrop.classList.toggle('visible')
}

const toggleMovieModal = () => {
    myModal.classList.toggle('visible');
    toggleBackDrop()
}
const addMovieHandler = () => {
    let obj = {
        movieName: movieName.value,
        imgUrl: imgUrl.value,
        rating: rating.value
    }
    movieArray.push(obj);
    templating(movieArray);
    movieName.value = '';
    imgUrl.value = '';
    rating.value = '';
    toggleMovieModal();
}
addMoviesModal.addEventListener('click', toggleMovieModal);

function templating(arr){
    let result = '';
    arr.forEach(movie => {
        result += `
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <figure class="movieDetail m-0">
                                    <img src="${movie.imgUrl}">
                                    <figcaption>
                                        <div class="row">
                                            <div class="col-sm-10">
                                                <p class="movieTitle">
                                                    ${movie.movieName}
                                                 </p>
                                            </div>
                                            <div class="col-sm-2">
                                                <p class="startRating">
                                                    ${movie.rating}/5
                                                </p>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
        `
    })
    movieHolder.innerHTML = result;
}
MyClose.forEach(ele => {
    cl(ele)
    ele.addEventListener('click', toggleMovieModal)
})

backDrop.addEventListener('click', toggleMovieModal);
addMovieBtn.addEventListener('click', addMovieHandler)