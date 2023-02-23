<template>
  <div id="app">
    <Header></Header>
    <div>
      <h4>키보드</h4>
      <p>{{ keyboard_price }}</p>
    </div>
    <div>
      <h4>마우스</h4>
      <p>{{ mouse_price }}</p>
    </div>
    <router-link to="/1"> 1페이지로 </router-link>
    <br>
    <router-link to="/2"> 2페이지로 </router-link>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'

/*
  [App.vue 설명]
  1. App.vue 는 Vue 애플리케이션의 최상위 컴포넌트입니다

  2. template : 
    - 화면 상에 표시할 요소 작성 실시
    - 컴포넌트의 모든 마크업 구조와 디스플레이 로직 작성

  3. script : 
    - import 구문을 사용해 template에서 사용할 컴포넌트 불러온다
    - export default 구문에서 해당 App 컴포넌트가 main.js 파일에서 불러와지도록 내용 작성 실시
    - export default 구문에서 모듈의 함수, 객체, 변수 등을 다른 모듈에서 가져다 사용 할 수 있도록 내보냅니다

  4. style : 
    - 스타일 지정 실시

  5. {{ message }} : 데이터 바인딩 시 사용

  6. data : 컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)

  7. methods : 메소드 정의 실시   

  8. router-view : 라우터에서 설정한 뷰 로드 실시
*/

export default {
  name: 'App',
  data() {
    return {
      keyboard_price: "37,000",
      mouse_price: "15,000"
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
