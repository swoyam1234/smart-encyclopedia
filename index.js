$(".portfolio-item").isotope({
  // options
  itemSelector: ".item",
  layoutMode: "fitRows",
});
$(".portfolio-menu ul li").click(function () {
  $(".portfolio-menu ul li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".portfolio-item").isotope({
    filter: selector,
  });
  return false;
});
const countries = document.querySelectorAll(".text");
const cards = document.querySelector(".portfolio-item");
cards.addEventListener("click", async (e) => {
  if (e.target.classList.contains("text")) {
    console.log(e.target.innerText);
    const country = e.target.innerText;
    let res = await getCountry(country);
    console.log(res);
  }
});
