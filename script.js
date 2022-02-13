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
    option.value = `S0${ses}E0${epi}`;
    console.log(select);
    select.append(option);
    const seriesImage = res.data[i].image.medium;
    const seriesSum = res.data[i].summary;
    const seriesName = res.data[i].name;
    const seriesUrl = res.data[i].url;
    const divCard = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    const cardATag = document.createElement("a");
    const seasonCard = document.createElement("h6");
    divCard.className = "card";
    divCard.style = "width: 18rem;";
    cardImg.className = "card-img-top";
    cardImg.src = seriesImage;
    cardImg.alt = seriesName;
    cardBody.className = "card-body";
    cardTitle.innerText = seriesName;
    cardTitle.className = "card-title";
    seasonCard.className = "card-title";
    seasonCard.innerText = `S0${ses}E0${epi}`;
    cardText.innerHTML = seriesSum;
    cardText.className = "card-text";
    cardATag.href = seriesUrl;
    cardATag.className = "btn btn-primary";
    cardATag.innerText = "WATCH";
    divCard.style.margin = "25px";
    divCard.append(cardImg);
    cardBody.append(cardTitle, seasonCard, cardText, cardATag);
    divCard.append(cardBody);
    glass.append(divCard);
    option.addEventListener("click", () => {
      if (option.innerText === seasonCard.innerText) {
        divCard.classList.toggle(".hidden");
      }
    });
  }
  // ? appending all the series with name , season , summary , image and link

  //   for (let i = 0; i < res.data.length; i++) {
  //     const ses = res.data[i].season;
  //     const epi = res.data[i].number;

  //   }
});
