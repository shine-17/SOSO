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
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'

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
