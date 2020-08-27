<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Vue 後台管理系統</a>
    <div>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'B2_PAGE' }">
            B2
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'B3_PAGE' }">
            B3
          </router-link>
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
    signOut() {
      this.$cookies.remove('token');
      // this.$bus.$emit('message:push',
      //   '登出成功',
      //   'success');
      // this.$router.push('/login');
    },
  },
};
</script>
