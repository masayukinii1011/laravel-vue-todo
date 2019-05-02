<template>
  <div id="app">
    <div class="wrap">
      <header-component></header-component>
      <router-view></router-view>
    </div>
    <top-button></top-button>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'
import TopButton from './TopButton.vue'
export default {
    components: {
      HeaderComponent, FooterComponent, TopButton
    }
  }
</script>