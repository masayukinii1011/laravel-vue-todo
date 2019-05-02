<template>
  <header>
    <nav>
      <div class="nav-wrapper">
        <h1><router-link to="/">My Todo</router-link></h1>
        <ul class="nav-menu">
          <li><router-link to="/about" class="nav-about">About</router-link></li>
          <li><router-link to="/" class="nav-login">Log In</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
  header {
    margin-bottom: 64px;

    nav {
      background:#00bcd4;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);

      h1 {
        margin-left:20px;
        padding:16px 0 12px;

        a {
          color: #fff;
          font-size: 52px;
          transition: .2s ease-out;
          padding: 0 8px;

          &:hover {
            background:#0097a7;
            font-size: 54px;
          }
        }
      }
    }
  }

  .nav-wrapper{
    display:flex;
    justify-content: space-between;
  }

  .nav-menu{
    display:flex;
    align-items:center;
    margin-right: 24px;

    li a{
      padding: 22px 16px;
      color: #fff;
      transition: .2s ease-out;

      &:hover {
        font-size:17px;
        }
    }
  }

  .nav-about {
    background:#ec407a;

    &:hover {
      background:#d81b60;
    }
  }

  .nav-login,
  .nav-logout {
    background:#7e57c2;

    &:hover {
      background:#5e35b1;
    }
  }
</style>