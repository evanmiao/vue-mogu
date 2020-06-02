<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">首页</div></nav-bar>
    <home-swiper :banner="banner" ref="homeSwiper"></home-swiper>
    <feature-view :feature="feature"></feature-view>
    <recommend-view></recommend-view>
  </div>
</template>

<script>
import NavBar from '@/components/base/NavBar'
import HomeSwiper from './components/HomeSwiper'
import FeatureView from './components/FeatureView'
import RecommendView from './components/RecommendView'
import { getHomeMultidata } from '@/api/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    FeatureView,
    RecommendView
  },
  data() {
    return {
      banner: [],
      feature: []
    }
  },
  created() {
    this.getMultiData()
  },
  methods: {
    getMultiData() {
      getHomeMultidata().then(res => {
        this.banner = res.data.data.banner
        this.feature = res.data.data.feature
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .nav-bar
    color #fff
    background-color $color-main
</style>