// main menu && some num counter && go top
window.onscroll = () => {
  $('.fixed-top').html(document.documentElement.scrollTop)
  if (document.documentElement.scrollTop > 100) {
    $('.main-menu').addClass('main-menu-shadow')
  } else if (document.documentElement.scrollTop == 0) {
    $('.main-menu').removeClass('main-menu-shadow')
  }
  //  some----------------
  if (document.documentElement.scrollTop > 1066 && document.documentElement.scrollTop < 1248) {
    var [counters, count] = [0, setInterval(() => {
      counters++
      if (counters == 120) {
        clearInterval(count)
      }
      $('.some-num-first').html('+' + (counters + 66))
      $('.some-num-second').html('+' + (105 + counters))
      $('.some-num-third').html('+' + (29 + counters))

    }, 15)]
  }
  // go top-------------
  document.documentElement.scrollTop > 200 ? $('.go-top').css('display', 'flex') : $('.go-top').css('display', 'none')
  $('.go-top').click(function () { document.documentElement.scrollTop = 0 })

}
// main menu social medias
$('.main-menu-social-medias-small-mode').click(function () {
  $('.main-menu-social-medias-small-mode-ul').toggleClass('main-menu-social-medias-small-mode-ul-show')
})
//main menu search
$('.main-menu-fix-items-search').click(function () {
  $('.main-menu-search').addClass('main-menu-search-show')
})
// close
$('.main-menu-search-box-close').click(function () {
  $('.main-menu-search').removeClass('main-menu-search-show')
})
// side menu
$('.main-menu-side-title ').click(function () {
  $(this).next('.main-menu-side-child').slideToggle()
})
// first slider---------------------------------------
var [num, numText] = [0, 0]
var [counter, counterText] = [
  ["images/first-slider/slide1.jpg", "images/first-slider/slide2.jpg", "images/first-slider/slide3.jpg"],
  ["<p>general</p> <h1> natural plus modern</h1><br><small>lorem lorem lorem lorem lorem lorem</small>",
    "<p>general2</p>  <h1> natural plus modern2</h1><br><small>lorem lorem lorem lorem lorem lorem2</small>",
    "<p>general3</p> <h1> natural plus modern3</h1><br><small>lorem lorem lorem lorem lorem lorem3</small>"]
]
$("#firstSliderCurrentText").html(counterText[numText]);
$("#firstSliderCurrentSlide").attr('src', counter[num]);
console.log(
  $("#firstSliderCurrentSlide").attr('src', counter[num])
)
// next slide
function nextSlide() {
  num++
  numText++
  num && numText > counter.length - 1 && counterText.length - 1 ? [num, numText] = [0, 0] : ''
  $('#firstSliderCurrentSlide').attr("src", counter[num])
  $("#firstSliderCurrentText").html(counterText[numText]);
}
// pervious slide
function perSlide() {
  num--
  numText--
  num && numText < 0 ? [num, numText] = [counter.length - 1, counterText.length - 1] : ''
  $('#firstSliderCurrentSlide').attr("src", counter[num])
  $("#firstSliderCurrentText").html(counterText[numText]);
}
// auto change
setInterval(() => {
  nextSlide()
}, 3000);
// hover next image
$('#firstSliderNextHover').on("mouseover", function () {
  if (num == counter.length - 1 && numText == counter.length - 1) {
    num = -1
    numText = -1
  } else {
    $(this).attr("src", counter[num + 1])
  }
  $(this).attr("src", counter[num + 1])

})
// hover per image
$('#firstSliderPerHover').on("mouseover", function () {
  num == 0 ? num = counter.length : ''
  $(this).attr("src", counter[num - 1])
});

// tab project-----------------------------------------------

var [buildingProject, interiorProject] = [['images/tab-project/pic1.jpg', 'images/tab-project/pic2.jpg', 'images/tab-project/pic3.jpg']
  , ['images/tab-project/pic7.jpg', 'images/tab-project/pic6.jpg', 'images/tab-project/pic4.jpg']]
var allProject = [...buildingProject, ...interiorProject]
allProject.map(function (allProjects) {
  var img = document.createElement('img');
  $(img).attr('src', allProjects);
  var imgBox = document.createElement('div')
  $(imgBox).addClass('swiper-slide')
  $(imgBox).html('<div><h4>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</h4><p>l lorem lorem lorem lorem lorem lorem lorem</p></div>')
  $(imgBox).append(img);
  $('.mySwiper1 .swiper-wrapper').append(imgBox);

});
buildingProject.map(function (buildingProjects) {
  var img = document.createElement('img');
  $(img).attr('src', buildingProjects);
  var imgBox = document.createElement('div')
  $(imgBox).addClass('swiper-slide')
  $(imgBox).html('<div><h4>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore lorem lorem lorem lorem lorem lorem lorem</h4><p>l lorem lorem lorem lorem lorem lorem lorem</p></div>')
  $(imgBox).append(img);
  $('.mySwiper2 .swiper-wrapper').append(imgBox);

});
interiorProject.map(function (interiorProjects) {
  var img = document.createElement('img');
  $(img).attr('src', interiorProjects);
  var imgBox = document.createElement('div')
  $(imgBox).addClass('swiper-slide')
  $(imgBox).html('<div><h4>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</h4><p>l lorem lorem lorem lorem lorem lorem lorem</p></div>')
  $(imgBox).append(img);
  $('.mySwiper3 .swiper-wrapper').append(imgBox);

});
var swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

var box = document.querySelectorAll('.tab-box div')
var btn = document.querySelectorAll('.tab-btn h4')
btn.forEach((btns) => {
  btns.addEventListener('click', () => {
    box.forEach((boxs) => {
      boxs.classList.remove('tab-box-active')
      tabBtnRemove()
      boxs.classList.value == btns.classList.value ? boxs.classList.add('tab-box-active') : ''
      btns.classList.add('tab-btn-active')

    })

  })

})

function tabBtnRemove() {
  var btn = document.querySelectorAll('.tab-btn h4')

  btn.forEach(function (btns) {
    btns.classList.remove('tab-btn-active')
  })
}


// alert(window.innerWidth)



