<template>
  <div class="review" v-if="reviewList.length">
    <div class="header">
      <div class="header-title">买家评价</div>
      <div class="header-more">更多<i class="arrow-right"></i></div>
    </div>
    <div class="item" v-for="(item, index) in reviewList" :key="index">
      <div class="user">
        <img :src="item.avatar" />
        <span>{{ item.name }}</span>
      </div>
      <div class="detail">
        <p>{{ item.text }}</p>
        <div class="date">{{ item.date | dateFilter }}</div>
        <div class="imgs" v-if="item.image">
          <img :src="item" v-for="(item, index) in item.images" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/utils/util"

export default {
  name: 'DetailReview',
  props: {
    reviewList: {
      type: Array
    }
  },
  filters: {
    dateFilter(val) {
      let date = new Date(val * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style lang="stylus" scoped>
.review
  padding 5px 12px
  border-bottom 5px solid #f2f5f8
  color #333

  .header
    height 50px
    line-height 50px

    &-title
      float left
      font-size 15px

    &-more
      float right
      margin-right 10px
      font-size 13px

  .item
    border-top 1px solid rgba(0, 0, 0, .1)

    .user
      display flex
      align-items center
      padding 10px 0 5px

      img
        width 42px
        height 42px
        border-radius 50%

      span
        margin-left 10px
        font-size 15px

    .detail
      padding 0 5px 15px

      p
        line-height 1.5
        font-size 14px
        color #777

      .date
        margin-top 10px
        font-size 12px
        color #999

      .imgs
        margin-top 10px

        img
          width 70px
          height 70px
          margin-right 5px
</style>
