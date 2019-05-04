<template lang="pug">
div#app
  div.wrap
    header-component
    div.main
      div.main-inner
        router-view
  top-button
  footer-component
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

<style>
.main-inner {
    width:896px;
    margin: 0 auto;
    padding:32px;
    background:#fff;
    border-radius: 2px;
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.14), 0 0 1px -2px rgba(0,0,0,0.12), 0 0 5px 0 rgba(0,0,0,0.2);
}
</style>