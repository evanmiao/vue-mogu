<template>
  <div id="detail">
    <detail-nav-bar :current="navCurrent" @navClick="navClick"></detail-nav-bar>
    <scroll
      class="content"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <div>
        <detail-swiper :images="swiperList" ref="detailSwiper"></detail-swiper>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/base/Scroll'
import DetailNavBar from './components/DetailNavBar'
import DetailSwiper from './components/DetailSwiper'
import { getDetailData } from '@/api/detail'

export default {
  name: 'Detail',
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: '',
      navCurrent: 0,
      swiperList: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    /**
     * 网络请求
     */
    getData() {
      let iid = this.$route.query.iid
      this.iid = iid

      getDetailData(iid).then(res => {
        // 轮播图
        this.swiperList = res.data.data.swiper_img
      })
    },
    /**
     * 事件监听
     */
    navClick(e) {
      this.navCurrent = e
    },
    contentScroll() {

    }
  }
}
</script>

<style lang="stylus" scoped>
#detail
  height 100vh
</style>