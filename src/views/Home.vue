<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a
      class="navbar-brand"
      href="#"
    >Vue 前台管理系統</a>
     <!-- <h1>This is a Home Page</h1>
    <img alt="Vue logo" src="../assets/logo.png"> -->
    <div id="nav">
       <ul class="navbar-nav mr-auto">
        <li class="nav-item">
         <router-link to="/">Home</router-link>  ||
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'NP'}">NP</router-link>  ||
        </li>
        <li class="nav-item">
           <router-link to="/B3">B3</router-link> ||
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link> ||
        </li>
        <li class="nav-item">
          <router-link to="/Page1">Page1</router-link> ||
        </li>
        <li class="nav-item">
         <router-link to="/NEXT" class="C1">NEXT</router-link> ||
        </li>
      </ul>
</div>
</nav>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  name: 'HOME',
};
</script>
