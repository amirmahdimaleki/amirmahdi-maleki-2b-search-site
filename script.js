const button = document.querySelector("form-control");
const form = document.querySelector("d-flex");
const glass = document.getElementById("glass");
//?  here i wanna take the form
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchInput = e.target.value;

  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchInput}`
  );

  makeImages(res.data);
  e.target.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      glass.append(img);
    }
  }
};
