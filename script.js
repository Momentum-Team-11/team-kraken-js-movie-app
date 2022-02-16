// Create a form to allow a user to add a new movie
// mark new movies are not watched by default when they're added
// show a list of existing movies -
// watched or not should be indicated somehow
// watch movies should show the date they were watched
// allow a user to mark a movie as having been watched (link, button ,icon, checkbox)
const url = 'http://localhost:3000/movies'
const listOfMovies = document.getElementById('listOfMovies')



fetch(url)
.then((res) => res.json())
.then((data) => {
    console.log(data)
for(let movieObj of data){
    renderMovieList(movieObj)
}
})


const movieSearch = document.getElementById('movie-search')
movieSearch.addEventListener('submit', function(event){
    event.preventDefault()
    console.log("click!", movieSearch)
    const search = document.querySelector('#search').value
    fetch(url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            title: search, 
            //watched: boolean
            //created_at: later add moment
        })
    })
})

function renderMovieList(movieObj) {
    const movieEl = document.createElement('li')
    movieEl.id = movieObj.id
    movieEl.innerHTML = `${movieObj.movie}`
    listOfMovies.appendChild(movieEl)
} 
// start display movie list
// add a checkBox to each movie
//create a list element for movies
//create some functions (boolean, moment.js, fetch request for patch to be able to update)