

# 리액트 프로젝트 시작하기

1. nodejs 설치
2. create-react-app 설치 (최초1번)
```
$ npm install -g create-react-app
```

3. react프로젝트 생성
```
$ npx create-react-app 프로젝트이름
```

4. react 프로젝트 실행
```
$ cd 프로젝트폴더
$ npm start
```
- http://localhost:3000 에서 프론트엔드 서버 실행


## git clone시 주의사항
- `$ npm install` 명령을 터미널에서 실행하여 라이브러리 설치


5. 추가 라이브러리
```
$ npm install react-icons classnames
$ npm install reactstrap bootstrap
$ npm install sass // scss 문법사용
$ npm install @mui/material @emotion/react @emotion/styled
$ npm install @mui/icons-material
$ npm install react-router-dom
```


## 리액트 라우터 설정
- index.js에 BrowserRouter 컴포넌트로 App 감싸기
- ``` javascript
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<App />
</BrowserRouter>

);
- ``` 