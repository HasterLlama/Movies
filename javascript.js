const API = "2678343f7f72fb5cc6edb88c868ab822"

async function szuk(){
    const query = document.getElementById("film").value;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${query}`;

    const response = await fetch(url);
    const data = await response.json();

    displayMovies(data.results);
}

function displayMovies(movies){
    const results = document.getElementById("result");
    results.innerHTML = "";

    movies.forEach(movie => {
        const div = document.createElement("div");

        const poster = movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : "";

        div.className = "pupa"

        div.innerHTML = `
            <h3><a href="https://vidfast.net/movie/${movie.id}">${movie.title}<a/></h3>
            <img src="${poster}" />
            <p>${movie.release_date}</p>
        `;

        results.appendChild(div);
    });
}
