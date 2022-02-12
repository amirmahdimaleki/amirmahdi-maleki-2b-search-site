const button = document.querySelector("form-control");
const form = document.querySelector("d-flex");
const glass = document.getElementById("glass");
//?  here i wanna take the form and add an event listener for search

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

const episodes = async () => {
  //  ? trying to bring the api to website and making an option tag for it
  try {
    const res = await axios.get("https://api.tvmaze.com/shows/5/episodes", {
      headers: {
        Accept: "application/json",
      },
    });
    return res.data.joke;
  } catch (error) {
    console.log("no jokes available , sorry");
  }
};
