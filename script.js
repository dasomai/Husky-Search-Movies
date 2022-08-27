const api_url = " http://www.omdbapi.com/?i=tt3896198&apikey=fc68976&s=";

let keyword = "cowboy";

const searchInput = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
const moviesContainer = document.querySelector(".movies-container");


async function getapi(url) {
  const response = await fetch(url);

  let data = await response.json();
  console.log(data);
  moviesContainer.innerHTML = "";
  showdata(data);

}



const showdata = (data) => {
  const searchResults = data.Search;
  searchResults.forEach(result => {
    console.log(result.Title);
    moviesContainer.innerHTML +=
      '<div class="movie-card">' +
      '<img class="movie-image" src="' + result.Poster + '" />' +
      '<h3 class="movie-title">' + result.Title + '</h3>' +
      '<div class="movie-year">' + result.Year + '</div>' +
      '</div>';




  });

}



getapi(api_url + keyword);

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  keyword = searchInput.value;
  if (keyword.length > 0) {
    getapi(api_url + keyword);
  }

})

searchInput.addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    e.preventDefault();
    keyword = searchInput.value;
    if (keyword.length > 0) {
      getapi(api_url + keyword);
    }
  }
})

