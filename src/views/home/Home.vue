<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">首页</div></nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :data="showGoodsList"
      :pull-up-load="true"
      :probe-type="3"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <div>
        <home-swiper :banner="banner" ref="homeSwiper"></home-swiper>
        <feature-view :feature="feature"></feature-view>
        <recommend-view></recommend-view>
        <tab-control :tabs="['流行', '新款', '精选']" @itemClick="tabClick"></tab-control>
        <goods-list :goods-list="showGoodsList"></goods-list>
      </div>
    </scroll>
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
      feature: [],
      goodsList: {
        'pop': { page: 1, list: [] },
        'new': { page: 1, list: [] },
        'sell': { page: 1, list: [] }
      },
      currentType: 'pop',
    }
  },
  computed: {
    showGoodsList() {
      return this.goodsList[this.currentType].list
    }
  },
  created() {
    this.getMultiData()
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')
  },
  methods: {
    getMultiData() {
      getHomeMultiData().then(res => {
        this.banner = res.data.data.banner
        this.feature = res.data.data.feature
      })
    },
    getGoods(type) {
      getHomeGoods(type, this.goodsList[type].page).then(res => {
        const goodsList = res.data.data.list
        this.goodsList[type].list.push(...goodsList)
        this.goodsList[type].page += 1
      })
    },
    tabClick(e) {
      switch (e) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .nav-bar
    color #fff
    background-color $color-main
</style>