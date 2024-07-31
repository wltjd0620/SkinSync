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


/*----------------------클릭시 빨간 테두리 표시--------------------------*/
document.querySelectorAll('.answer-circle').forEach(circle => {
    circle.addEventListener('click', function() {
        // 클릭된 질문 ID와 답변 데이터 가져오기
        const questionContainer = this.closest('.question-container');
        const questionId = questionContainer.getAttribute('data-question-id');
        const answer = this.getAttribute('data-answer');

        // 모든 버튼에서 선택된 클래스 제거
        questionContainer.querySelectorAll('.answer-circle').forEach(btn => {
            btn.classList.remove('selected');
        });

        // 클릭된 버튼에 선택된 클래스 추가
        this.classList.add('selected');

        // 서버로 보낼 데이터를 저장하거나 처리
        // 예: 서버로 데이터 전송
        // sendDataToServer({ questionId, answer });

        console.log(`Question ${questionId} answered with: ${answer}`);
    });
});

  


  
  