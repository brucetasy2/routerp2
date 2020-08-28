<template>
  <div class='next'>
    <h1>請登入系統</h1>
    <button @click="signin" class="btn btn-primary">登入</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    signin() {
      console.log('Next..');
      this.$router.push('/admin');
    },
  },
};
</script>
