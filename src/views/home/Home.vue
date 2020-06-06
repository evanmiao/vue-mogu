<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">首页</div></nav-bar>
    <tab-control class="fixed-tab" :tabs="['流行', '新款', '精选']" @itemClick="tabClick" v-show="isTabFixed"></tab-control>
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
        <tab-control :tabs="['流行', '新款', '精选']" @itemClick="tabClick" ref="tabControl"></tab-control>
        <goods-list :goods-list="showGoodsList"></goods-list>
      </div>
    </scroll>
    <back-top class="back-top" @backTop="backTop" v-show="showBackTop">
      <img src="~assets/img/common/top.png">
    </back-top>
  </div>
</template>

<script>
import NavBar from '@/components/base/NavBar'
import Scroll from '@/components/base/Scroll'
import TabControl from '@/components/layout/TabControl'
import BackTop from '@/components/layout/BackTop'
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
    BackTop,
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
      isTabFixed: false,
      tabOffsetTop: 0,
      showBackTop: false
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
  activated() {
    this.$refs.homeSwiper.startTimer()
  },
  deactivated() {
    this.$refs.homeSwiper.stopTimer()
  },
  updated() {
    this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
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
        this.$refs.scroll.finishPullUp()
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
    },
    contentScroll(position) {
      // 1.决定tabFixed是否显示
      this.isTabFixed = position.y < - this.tabOffsetTop
      // 2.决定backTop是否显示
      this.showBackTop = position.y < - 1000
    },
    loadMore() {
      this.getGoods(this.currentType)
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    }
  }
}
</script>

<style lang="stylus" scoped>
#home
  height 100vh

.nav-bar
  font-weight 700
  color #fff
  background-color $color-main

.fixed-tab
  position fixed
  top 44px
  width 100%

.content
  position absolute
  top 44px
  bottom 49px

.back-top
  position fixed
  right 10px
  bottom 60px
</style>