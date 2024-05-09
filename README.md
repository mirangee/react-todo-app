# 리액트 프로젝트 시작하기

1. node.js 설치 (LTS 버전으로)

2. create-react-app 설치 (최초 1번)
```
$ npm install -g create-react-app
```
3. react 프로젝트 생성
```
$ npx create-react-app 프로젝트이름
```
4. react 프로젝트 실행
```
$ cd 프로젝트폴더
$ npm start
- http://localhost:3000 에서 프론트엔드 서버 실행.
```

# git clone 시 주의사항

---
```
$ npm install
명령을 터미널에서 실행하여 라이브러리 설치
```
이것을 하고 npm start해야 정상 작동

5. 추가 라이브러리
```
   $ npm install react-icons // 아이콘
   $ npm install classnames // 클래스 add/remove 편리하게
   $ npm install sass // scss 문법 사용
   $ npm install reactstrap bootstrap // bootstrap을 쉽게 사용하게 도와주는 reactstrap
   $ npm install @mui/material @emotion/react @emotion/styled // 디자인 도구들
   $ npm install @mui/icons-material
   $ npm install react-router-dom // 다른 html 페이지로 넘어가는 것처럼 보여주는 라우터
```