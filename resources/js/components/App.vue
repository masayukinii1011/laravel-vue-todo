<template>
  <div id="app">
    <div class="wrap">
      <HeaderComponent></HeaderComponent>
      <router-view></router-view>
    </div>
    <TopButton></TopButton>
    <FooterComponent></FooterComponent>
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