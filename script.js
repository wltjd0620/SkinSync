// script.js

// 입력창과 버튼 요소 선택
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const box = document.querySelector('.o_noncircled_back');


console.log('JavaScript code is running.');

// 검색 기능을 수행하는 함수
function performSearch() {
    const query = searchInput.value.trim(); // 입력값 가져오기
    if (query) {
        // 입력값 데이터 string
        console.log(`Searching for: ${query}`); // 검색어를 콘솔에 출력 (여기에서 실제 검색 로직을 구현)
        // 페이지 전환
        // window.location.href = `page2.html?search=${encodeURIComponent(query)}`;
        
        
        // 입력값의 데이터는 string
        // console.log(typeof(query));
        
    } else {
        console.log('No query entered.');
    }
}

// 버튼 클릭 시 검색 수행
searchButton.addEventListener('click', performSearch);

// 엔터 키를 눌렀을 때 검색 수행
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
        event.preventDefault(); // 기본 엔터키 동작 방지 (폼 제출 등)
    }
});

// 클릭 시 빨간 테두리 토글
box.addEventListener('click',() => {
    box.classList.toggle('clicked'); // 클릭할 때마다 'clicked' 클래스 토글
})