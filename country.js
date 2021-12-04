const getCountry = async (name) => {
  const url = `https://restcountries.com/v2/name/${name}`;
  const response = await fetch(url);
  let data = await response.json();
  return data;
};
const country = new URLSearchParams(window.location.search).get("name");
const modal = document.querySelector(".countryModal");
getCountry(country).then((data) => {
  data.forEach((item) => {
    modal.innerHTML += `
      <div class="modal">
      <div class="leftModal">
        <img src="${item.flags.svg}" alt="" />
      </div>

      <div class="rightModal">
        <h1>${item.name}</h1>

        <div class="modalinfo">
          <div class="innerLeft inner">
            <p><strong>Native Name:</strong> ${item.nativeName}</p>

            <p><strong>Population:</strong> ${item.population}</p>
            <p><strong>Region:</strong> ${item.region}</p>

            <p><strong>Sub-region:</strong> ${item.subregion}</p>
          </div>

          <div class="innerRight inner">
            <p><strong>Capital:</strong> ${item.capital}</p>

            <p><strong>Top Level Domain:</strong> ${item.topLevelDomain}</p>
            <p><strong>Currencies:</strong> ${item.currencies
              .map((currency) => currency.name)
              .join(",")}</p>
            <p><strong>Languages: </strong> ${item.languages
              .map((language) => language.name)
              .join(",")}</p>
          </div>
        </div>
      </div>
    </div>
      `;
  });
});
