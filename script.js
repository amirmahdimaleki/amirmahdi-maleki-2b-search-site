const button = document.querySelector("form-control");
const form = document.querySelector("d-flex");
const glass = document.getElementById("glass");
const select = document.getElementById("episod-select");
//?  here i wanna take the form and add an event listener for search
// todo
// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   const searchInput = e.target.value;

//   const res = await axios.get(
//     `https://api.tvmaze.com/search/shows?q=${searchInput}`
//   );

//   makeImages(res.data);
//   e.target.value = "";
// });

// const makeImages = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("IMG");
//       img.src = result.show.image.medium;
//       glass.append(img);
//     }
//   }
// };
const episodes = async () => {
  //  ? trying to bring the api to website and making an option tag for it

  const res = await axios.get("https://api.tvmaze.com/shows/5/episodes");
  for (let i = 0; i < res.length; i++) {
    const ses = res[i].season;
    console.log(ses);
  }
};
