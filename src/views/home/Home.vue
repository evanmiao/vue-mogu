<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">首页</div></nav-bar>
    <home-swiper :banner="banner" ref="homeSwiper"></home-swiper>
    <feature-view :feature="feature"></feature-view>
    <recommend-view></recommend-view>
    <tab-control :tabs="['流行', '新款', '精选']" @itemClick="tabClick"></tab-control>
    <goods-list :goods-list="showGoodsList"></goods-list>
  </div>
</template>

<script>
import NavBar from '@/components/base/NavBar'
import Scroll from '@/components/base/Scroll'
import TabControl from '@/components/layout/TabControl'
import HomeSwiper from './components/HomeSwiper'
import FeatureView from './components/FeatureView'
import RecommendView from './components/RecommendView'
import GoodsList from './components/GoodsList'
import { getHomeMultiData, getHomeGoods } from '@/api/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    Scroll,
    TabControl,
    HomeSwiper,
    FeatureView,
    RecommendView,
    GoodsList
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
      getHomeMultiData().then(res => {
        this.banner = res.data.data.banner
        this.feature = res.data.data.feature
      })
    },
    getGoods() {
      getHomeGoods().then(res => {
        console.log(res)
      })
    },
    tabClick(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .nav-bar
    color #fff
    background-color $color-main
</style>