// 리액트 내에서 백엔드로 fetch 요청을 보내고 있다.
// 주소 변경 가능성을 염두에 두고
// 호스트 네임을 전역적으로 관리하려는 의도로 설정하는 파일이다.
// 이렇게 파일로 설정해 놓으면 나중에 주소가 바뀌더라도 각 fetch문마다
// 일일이 바꾸지 않아도 되어 효율적이다.

// 브라우저에서 현재 클라이언트의 호스트 이름 얻어오기
const clientHostName = window.location.hostname;

let backEndHostName; // 백엔드 서버 호스트 이름

// 현재 개발 중인 리액트 프로젝트의 ip는 localhost이다.
// 백엔드도 localhost로 작업 진행 중.
// 하지만, 나중에는 도메인을 구입할 것이다.
// 그렇게 되면 백엔드 주소도 바뀔 수 있다.

if (clientHostName === 'localhost') {
  // 개발 중이라면
  backEndHostName = 'http://localhost:8181';
} else if (clientHostName === '구매한 도메인 주소') {
  // 배포해서 서비스 중이라면
  backEndHostName = 'https://api.spring.com';
}

export const API_BASE_URL = backEndHostName;
export const TODO = '/api/todos';
export const USER = '/api/auth';
