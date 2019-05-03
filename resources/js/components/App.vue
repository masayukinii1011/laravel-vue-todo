<template lang="pug">
div#app
  div.wrap
    header-component
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