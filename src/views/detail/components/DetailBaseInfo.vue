<template>
  <div class="base-info" v-if="Object.keys(getGoods).length">
    <div class="title">{{ getGoods.title }}</div>
    <div class="price">
      <span class="price-now">{{ getGoods.price | priceFilter }}</span>
      <span class="price-old">{{ getGoods.oldPrice | priceFilter }}</span>
      <span class="discount">{{ getGoods.discount }}</span>
    </div>
    <div class="other">
      <span>销量 {{ getGoods.sales }}</span>
      <span>收藏 {{ getGoods.collection }}</span>
      <span>{{ getGoods.freight }}</span>
    </div>
    <div class="feature">
      <span class="feature-item" v-for="(item, index) in getGoods.feature" :key="index">
        <img :src="item.icon" />
        <span>{{ item.name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  naem: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    getGoods() {
      return this.goods
    }
  },
  filters: {
    priceFilter(val) {
      if (val) return '¥' + val.toFixed(2)
    }
  }
}
</script>

<style lang="stylus" scoped>
.base-info
  margin-top 15px
  padding 0 8px
  border-bottom 5px solid #f2f5f8
  color #999

  .title
    color #222

  .price
    margin-top 10px

    &-now
      font-size 24px
      color $color-active

    &-old
      margin-left 5px
      font-size 13px
      text-decoration line-through

    .discount
      position relative
      top -8px
      padding 2px 5px
      margin-left 5px
      border-radius 8px
      font-size 12px
      color #fff
      background-color $color-active

  .other
    display flex
    justify-content space-between
    margin-top 15px
    font-size 13px
    line-height 30px
    border-bottom 1px solid rgba(100, 100, 100, .1)

  .feature
    display flex
    justify-content space-between
    line-height 60px

    &-item
      img
        width 14px
        height 14px

      span
        margin-left 2px
        font-size 13px
        color #333
</style>