<template>
  <div id="detail">
    <detail-nav-bar :current="navCurrent" @navClick="navClick"></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :data="[swiperList, goods, shop, reviewList, detail, recommendList]"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <div>
        <detail-swiper :images="swiperList" ref="detailSwiper"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-review :reviewList="reviewList" ref="review"></detail-review>
        <detail-detail :detail="detail" ref="detail"></detail-detail>
        <detail-recommend :recommendList="recommendList" ref="recommend"></detail-recommend>
      </div>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top class="back-top" @backTop="backTop" v-show="showBackTop">
      <img src="~assets/img/common/top.png">
    </back-top>
  </div>
</template>

<script>
import Scroll from '@/components/base/Scroll'
import BackTop from '@/components/layout/BackTop'
import DetailNavBar from './components/DetailNavBar'
import DetailSwiper from './components/DetailSwiper'
import DetailBaseInfo from './components/DetailBaseInfo'
import DetailShopInfo from './components/DetailShopInfo'
import DetailReview from './components/DetailReview'
import DetailDetail from './components/DetailDetail'
import DetailRecommend from './components/DetailRecommend'
import DetailBottomBar from './components/DetailBottomBar'
import { getDetailData, getDetailRecommend, Goods } from '@/api/detail'
import { backTopMixin } from '@/utils/mixin'

export default {
  name: 'Detail',
  components: {
    Scroll,
    BackTop,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailReview,
    DetailDetail,
    DetailRecommend,
    DetailBottomBar
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: '',
      navCurrent: 0,
      swiperList: [],
      goods: {},
      shop: {},
      reviewList: [],
      detail: {},
      recommendList: [],
      themeTops: []
    }
  },
  created() {
    this.getData()
    this.getRecommend()
  },
  updated() {
    // 获取需要的四个offsetTop
    this.getOffsetTops()
  },
  methods: {
    /**
     * 网络请求
     */
    getData() {
      let iid = this.$route.query.iid
      this.iid = iid

      getDetailData(iid).then(res => {
        let data = res.data.data
        // 轮播图
        this.swiperList = data.swiper_img
        // 商品信息
        this.goods = new Goods(data)
        // 店铺信息
        this.shop = JSON.parse(data.shop_info)
        // 评论
        this.reviewList = data.review.slice(0, 2)
        // 详情
        this.detail = { desc: data.title, detailImage: data.swiper_img }
      })
    },
    getRecommend() {
      getDetailRecommend().then(res => {
        this.recommendList = res.data.data.list
      })
    },
    /**
     * 事件监听
     */
    getOffsetTops() {
      this.themeTops = []
      this.themeTops.push(this.$refs.detailSwiper.$el.offsetTop)
      this.themeTops.push(this.$refs.review.$el.offsetTop)
      this.themeTops.push(this.$refs.detail.$el.offsetTop)
      this.themeTops.push(this.$refs.recommend.$el.offsetTop)
      this.themeTops.push(Number.MAX_VALUE)
    },
    navClick(e) {
      this.$refs.scroll.scrollTo(0, -this.themeTops[e], 100)
    },
    contentScroll(position) {
      // 1.监听backTop的显示
      this.showBackTop = position.y < - 1000
      // 2.监听滚动到哪一个主题
      this.listenScrollTheme(- position.y)
    },
    listenScrollTheme(position) {
      let length = this.themeTops.length
      for (let i = 0; i < length; i++) {
        let iPos = this.themeTops[i]
        /**
         * 判断的方案:
         *  方案一:
         *    条件: (i < (length-1) && currentPos >= iPos && currentPos < this.themeTops[i+1]) || (i === (length-1) && currentPos >= iPos),
         *    优点: 不需要引入其他的内容, 通过逻辑解决
         *    缺点: 判断条件过长, 并且不容易理解
         *  方案二:
         *    条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
         *    优点: 简洁明了, 便于理解
         *    缺点: 需要引入一个较大的int数字
         * 疑惑: 在第一个判断中, 为什么不能直接判断(currentPos >= iPos)即可?
         * 解答: 比如在某一个currentPos大于第0个时, 就会break, 不会判断后面的i了.
         */
        if (position >= iPos && position < this.themeTops[i+1]) {
          if (this.navCurrent !== i) {
            this.navCurrent = i
          }
          break
        }
      }
    },
    addToCart() {
      // 1.创建对象
      const obj = {}
      // 2.对象信息
      obj.iid = this.iid
      obj.imgURL = this.swiperList[0]
      obj.title = this.goods.title
      obj.price = this.goods.price
      // 3.添加到Store中
      this.$store.commit('addCart', obj)
    }
  }
}
</script>

<style lang="stylus" scoped>
#detail
  height 100vh

  .content
    position absolute
    top 44px
    bottom 60px

  .back-top
    position fixed
    right 10px
    bottom 65px
</style>