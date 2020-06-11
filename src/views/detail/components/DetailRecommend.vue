<template>
  <div class="recommend">
    <div class="header">热门推荐</div>
    <grid-view>
      <goods-list-item v-for="(item, index) in getRecommendList" :key="index" :goods="item"></goods-list-item>
    </grid-view>
  </div>
</template>

<script>
import GridView from '@/components/base/GridView'
import GoodsListItem from '@/views/home/components/GoodsListItem'

export default {
  name: 'DetailRecommend',
  components: {
    GridView,
    GoodsListItem
  },
  props: {
    recommendList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    getRecommendList() {
      return this.recommendList
    }
  }
}
</script>

<style lang="stylus" scoped>
.recommend
  padding 5px

  .header
    padding-left 8px
    line-height 40px
    font-size 15px
    color #333
</style>
