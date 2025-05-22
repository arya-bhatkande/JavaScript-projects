// const accessKey = "VtR2IT8waHC49ny9mFtPimaxAZMNuYPoqqPzOK9yRF0";
// const accessKey = "VtR2IT8waHC49ny9mFtPimaxAZMNuYPoqqPzOK9yRF0";
const accessKey="ubuW9CE_8vKcAT-4ir_jiDeGTEfNnFrGek8oOcQLiJE"

const form = document.querySelector("form");
const search_inp = document.getElementById("search_input");
const searchResults = document.querySelector(".search-results");
const showMore = document.querySelector(".show_more");

let inputData = "";
let page = 1;

async function searchImage() {
  inputData = search_inp.value;
  page = 1;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
 
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)

  const results = data.results;

  if (page === 1) {
    searchResults.innerHTML = "";
  }
  // clearing the previous results before appending new ones
  results.forEach((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);
  });

  page++;

  if (page > 1) {
    showMore.style.display = "block";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
  // alert("loading")
});

showMore.addEventListener("click", () => {
  searchImage();
  page++;
});