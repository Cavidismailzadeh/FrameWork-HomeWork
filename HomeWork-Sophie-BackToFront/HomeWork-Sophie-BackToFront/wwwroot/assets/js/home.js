


$(document).ready(function () {


  // $(document).on("click", ".usd", function () {
  //   let usdText = $(".usd").children().eq(0).text();
  //   $("d-1").children().eq(0).text(usdText)
  // })

  // $(document).on("click", ".euro", function () {
  //   let euroText = $(".euro").children().eq(0).text();
  //   $("d-1").children().eq(0).text(euroText)
  // })


  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  // $(document).on("onmouseover", ".card",function(){

  //   $("icon1").classList.remove("d-none");

  // })

});



var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




function getDirection() {
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}





const tabLink = document.querySelectorAll(".tab-menu-link");
const tabContent = document.querySelectorAll(".tab-bar-content");

tabLink.forEach((item) => {
  item.addEventListener("click", activeTab);
});

function activeTab(item) {
  const btnTarget = item.currentTarget;
  const content = btnTarget.dataset.content;

  tabContent.forEach((item) => {
    item.classList.remove("is-active");
  });

  tabLink.forEach((item) => {
    item.classList.remove("is-active");
  });

  document.querySelector("#" + content).classList.add("is-active");
  btnTarget.classList.add("is-active");
}



