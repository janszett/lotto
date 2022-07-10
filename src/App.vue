<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img src="@/assets/images/lottoworld.png" alt="LottoWorld" class="logo">
      </router-link>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/eurojackpot">Eurojackpot</router-link>
      </nav>
    </header>
    
    <router-view/>
  </div>
</template>

<style lang="postcss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  & > header {
    & .logo {
      display: inline-block;
      width: 60vw;
      height: auto;

      @media (--xs) {
        width: 200px;
      }
    }

    & nav {
      padding: 30px;
      text-align: center;

      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #803940;
        }
      }
    }
  }
}


</style>
