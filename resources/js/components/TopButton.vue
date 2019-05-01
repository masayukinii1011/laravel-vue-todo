<template>
  <p class="top-btn">
    <a href="#top" v-smooth-scroll><i class="fas fa-angle-up"></i></a>
  </p>
</template>

<style lang="scss">
  .top-btn {
    width: 50px;
    height: 50px;
    position: fixed;
    right: 24px;
    bottom: 16px;
    background: #ff9800;
    opacity: 0;
    border-radius: 50px;
    transition: 0.2s ease-out;
    box-shadow: 0 2px 1px 0 rgba(0,0,0,0.14), 0 3px 0px -2px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2);

    &.fade-in {
      opacity:0.6;
    }

    &:hover {
      opacity: 0.8;
      transform: scale(1.16);
      box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 1px -2px rgba(161, 39, 39, 0.12), 0 2px 4px 0 rgba(0,0,0,0.2);
    }

    &:active {
      transform:translateY(8px);
    }

    a {
      position: relative;
      display: block;
      width: 50px;
      height: 50px;

      .fa-angle-up {
        font-size: 25px;
        color: #fff;
        position: absolute;
        width: 25px;
        height: 25px;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        text-align: center;
      }
    }
  }
</style>

<script>

</script>