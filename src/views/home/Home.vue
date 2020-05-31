<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">蘑菇街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/base/NavBar'
import { getHomeMultidata } from '@/api/home'

export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
    this.getMultiData()
  },
  methods: {
    getMultiData() {
      getHomeMultidata().then(res => {
        this.banner = res.data.data.banner
        this.recommend = res.data.data.recommend
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .nav-bar
    color #fff
    background-color #ff8198
</style>