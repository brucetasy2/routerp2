<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand text-light bg-primary" href="#">Vue 後台管理系統</a>
    <div>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'B2_PAGE' }">
            產品清單
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'B3_PAGE' }">
            產品明細
          </router-link>
        </li>
        <li class="nav-item">
                    <a
            class="nav-link"
            href="#"
            @click.prevent="BackHome"
          >
            Home
          </a>
        </li>
        <!-- <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            @click.prevent="signOut"
          >
            登出
          </a>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    BackHome() {
      this.$router.push('/');
      // this.$bus.$emit('message:push',
      //   '登出成功',
      //   'success');
      // this.$router.push('/login');
    },
  },
};
</script>
