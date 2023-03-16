const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  // searchEl라는 함수에(클래스 써치) 클릭이라는 이벤트가 일어나면 
  // serchInputEl라는 함수에 focus기능이 실행된다.(핸들러)
  searchInputEl.focus();
});


searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  // set=지정 attribute=html속성, 써치인풋엘리먼트 부분에 html속성을 지정할 때 사용한다.
  // placeholder=인풋요소 힌트
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2023