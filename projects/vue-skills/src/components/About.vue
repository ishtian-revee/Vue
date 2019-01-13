<template>
  <div class="about">
    <h1>Hello {{ user_name }}, This is an about page</h1>
    <p>Some texts related to about of this website and bla bla bla</p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      user_name: this.$route.params.name
    }
  }
}
</script>
