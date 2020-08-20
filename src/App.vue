// dwatow.github.io/2018/09-21-vuejs/vue-router-router-view
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>  ||
      <router-link :to="{ name: 'NP'}">NP</router-link>  ||
      <router-link to="/about">About</router-link> ||
      <router-link to="/NEXT">Next</router-link> ||
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
