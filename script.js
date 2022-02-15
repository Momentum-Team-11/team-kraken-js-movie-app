// Create a form to allow a user to add a new movie
// mark new movies are not watched by default when they're added
// show a list of existing movies -
// watched or not should be indicated somehow
// watch movies should show the date they were watched
// allow a user to mark a movie as having been watched (link, button ,icon, checkbox)
const url = 'http://localhost:3000/movies'

fetch(url)
.then((res) => res.json())
.then((data) => {
    console.log(data)
})