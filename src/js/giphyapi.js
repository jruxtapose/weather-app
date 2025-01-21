const myKey = "ZlmEJ2RaDHrmN4TdBv9it68pyzICQGwU";
const apiURL = `https://api.giphy.com/v1/gifs/translate?api_key=${myKey}&s=`;

const img = document.querySelector("img");

const fetchGif = async (searchTerm) => {
  fetch(`${apiURL}${searchTerm}&weirdness=1`, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
};

export { fetchGif };
