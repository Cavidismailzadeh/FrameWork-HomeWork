$(document).ready(function () { 
  
   $(document).on("mouseover",".item .single-team-member",function(){


    var flkty = new Flickity('.main-carousel', {
      draggable: false,
      prevNextButtons: false,
      pageDots: false,
      adaptiveHeight: true
    });
    
    })
    
    let inputs = document.querySelectorAll("form .inputs input");
    
    inputs.forEach(input => {
        input.addEventListener("blur", function () {
            if (this.value == "") {
                this.style.borderBottom = "1px solid red";
                this.nextElementSibling.nextElementSibling.style.color = "red";
                this.parentNode.lastElementChild.style.opacity = "1";
                this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
                
            }
        })
    
    
        body.addEventListener("click", function(){
            inputs.value = "";
        })
    
        input.addEventListener("keyup", function () {
            if (this.value == "") {
                this.style.borderBottom = "1px solid red";
                this.parentNode.lastElementChild.style.opacity = "1";
                this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
            }
    
            else {
                this.style.borderBottom = "1px solid #949494";
                this.parentNode.lastElementChild.style.opacity = "0";
                this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "#ef6c00");
            }
        })
    
        input.addEventListener("focus", function () {
            this.nextElementSibling.nextElementSibling.style.color = "#ef6c00";
        })
    })
    
    let textarea = document.querySelector(" form .textarea textarea");
    
    textarea.addEventListener("blur", function () {
        if (this.value == "") {
            this.style.borderBottom = "1px solid red";
            this.nextElementSibling.nextElementSibling.style.color = "red";
            this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
        }
    })
    
    textarea.addEventListener("keyup", function () {
        if (this.value == "") {
            this.style.borderBottom = "1px solid red";
            this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
        }
    
        else {
            this.style.borderBottom = "1px solid #949494";
            this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "#ef6c00");
        }
    })
    
    textarea.addEventListener("focus", function () {
        this.nextElementSibling.nextElementSibling.style.color = "#ef6c00";
    })
    
    let submit = document.querySelector("form button");
    
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        
        let checkValidation = false;
        let countOfEmpty = 0;
    
        for (const input of inputs) {
            if (input.value == "") {
                input.style.borderBottom = "1px solid red";
                input.nextElementSibling.nextElementSibling.style.color = "red";
                input.parentNode.lastElementChild.style.opacity = "1";
                input.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
    
                textarea.style.borderBottom = "1px solid red";
                textarea.nextElementSibling.nextElementSibling.style.color = "red";
                textarea.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
    
                countOfEmpty++;
            }
        }
    
        if (countOfEmpty == 0) {
            checkValidation = true;
        }
    
        if (!checkValidation) {
            return;
        }
    
        window.location.reload();
    })
})

const sliders = [...document.querySelectorAll(".slider__container")];
const sliderControlPrev = [...document.querySelectorAll(".slider__control.prev")];
const sliderControlNext = [...document.querySelectorAll(".slider__control.next")];

sliders.forEach((slider, i) => {
  let isDragStart = false,
      isDragging = false,
      isSlide = false,
      prevPageX,
      prevScrollLeft,
      positionDiff;

  const sliderItem = slider.querySelector(".slider__item");
  var isMultislide = (slider.dataset.multislide === 'true');

  sliderControlPrev[i].addEventListener('click', () => {
    if (isSlide) return;
    isSlide = true;
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
    slider.scrollLeft += -slideWidth;
    setTimeout(function(){ isSlide = false; }, 700);
  });

  sliderControlNext[i].addEventListener('click', () => {
    if (isSlide) return;
    isSlide = true;
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth ;
    slider.scrollLeft += slideWidth;
    setTimeout(function(){ isSlide = false; }, 700);
  });

  function autoSlide() {
    if(slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 || slider.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff);
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
    let valDifference = slideWidth - positionDiff;
    if(slider.scrollLeft > prevScrollLeft) {
        return slider.scrollLeft += positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
    }
    slider.scrollLeft -= positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
  }

  function dragStart(e) {
    if (isSlide) return;
    isSlide = true;
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider.scrollLeft;
    setTimeout(function(){ isSlide = false; }, 700);
  }

  function dragging(e) {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slider.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
  }

  function dragStop() {
    isDragStart = false;
    slider.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
  }

  addEventListener("resize", autoSlide);
  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("touchstart", dragStart);
  slider.addEventListener("mousemove", dragging);
  slider.addEventListener("touchmove", dragging);
  slider.addEventListener("mouseup", dragStop);
  slider.addEventListener("touchend", dragStop);
  slider.addEventListener("mouseleave", dragStop);
});


$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});