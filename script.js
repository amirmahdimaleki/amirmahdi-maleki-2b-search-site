const button = document.querySelector(".form-control");
const form = document.querySelector(".d-flex");
const glass = document.getElementById("glass");
const select = document.querySelector(".form-select");


//?  here i wanna take the form and add an event listener for search
// todo
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;

  const res = await axios.get(
    `https://api.tvmaze.com/search/shows/5?q=${searchTerm}`
  );

  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
const episodes = async () => {
  //  ? trying to bring the api to website and making a select tag for it
  const res = await axios.get("https://api.tvmaze.com/shows/5/episodes");
  return res;
};

const data = episodes().then((res) => {
  console.log(res);
  for (let i = 0; i < res.data.length; i++) {
    const ses = res.data[i].season;
    const epi = res.data[i].number;
    const option = document.createElement("option");
    option.innerText = `S0${ses}E0${epi}`;
    console.log(select);
    select.append(option);
  }
});
