<template>
  <div>
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <a class='navbar-brand text-light bg-dark' href='#'>Vue 前台管理系統</a>
      <div class='collapse navbar-collapse' id='navbarNav'>
        <ul class='navbar-nav'>
          <li class='nav-item active'>
            <router-link to='/' class='nav-link'>Home</router-link>
          </li>
          <li class='nav-item'>
            <router-link to='about' class='nav-link'>關於我們</router-link>
          </li>
          <li class='nav-item'>
            <router-link to='ShareholderInfo' class='nav-link'>股東訊息</router-link>
          </li>
          <li class='nav-item'>
            <router-link to='NEXT' class='nav-link text-danger'>登入</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <br />
    <div class='container'>
      <div class='row'>
        <div class='col-12'>
          <img src='@/assets/logo.png' alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: 'HomeList',
};
</script>
