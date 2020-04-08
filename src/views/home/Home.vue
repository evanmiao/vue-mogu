<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">蘑菇街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/base/NavBar'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    NavBar
  }
}
</script>

<style lang="stylus" scoped>
  .nav-bar
    color #fff
    background-color #ff8198
</style>