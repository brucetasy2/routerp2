<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class='navbar-brand' href='#'>Vue 前台管理系統</a>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to='/' class="nav-link" >Home</router-link>
      </li>
      <li class="nav-item">
         <router-link to='B3' class="nav-link">產品</router-link>
      </li>
      <li class="nav-item">
        <router-link to='about' class="nav-link">關於我們</router-link>
      </li>
      <li class="nav-item">
        <router-link to='Page1' class="nav-link">股東訊息</router-link>
      </li>
      <li class="nav-item">
        <router-link to='NEXT' class='nav-link text-danger'>登入</router-link>
      </li>
    </ul>
  </div>

  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: 'HomeList',
};
</script>
