<template>
  <div class='next'>
    <h1>This is a Next page</h1>
    <button @click="signin">登入</button>
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
