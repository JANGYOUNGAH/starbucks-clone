
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window는 우리가 보고있는 화면 자체이다.
// 윈도우 부분에 스크롤 이벤트를 통해 0.3초 단위로 부활을 줘서
// 다중복되는 함수를 방지하기 위해 로데시에서 제공하는 throttle이라는
// 메소드 기능을 사용한 것임

// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션).
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
      // opacity 속성처럼 값을 숫자로 입력하는 속성들은 전환효과를 통해 자연스럽게 사라지지만
      // display 속성처럼 값이 숫자가 아닌 속성은 자연스러운 전환효과 불가
      // 그러므로 opacity의 전환효과가 끝난 후 display속성을 입력하여 화면에서 사라진 후
      // 요소가 아예사라지게 만들어야함
    });
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0 
    });

  } else {
    // 배지 보여주기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100 
    });
  } 
}, 300));

// .throttle(함수, 시간)

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션).
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  autoplay: {
    delay: 5000
  },
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true   // 사용자의 페이지 번호 요소 제어 가능 여부
  },

  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// AWARDS 하단 버튼
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // 느낌표는 반대의 값을 반환한다
  if (isHidePromotion) {
    // 숨김처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}



function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,     //선택자
    random(1.5, 2.5),     // 애니메이션 동작 시간
    { //옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,   // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    }) 
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
});
