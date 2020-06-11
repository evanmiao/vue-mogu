<template>
  <div class="shop-info">
    <div class="container">
      <div class="left">
        <img :src="getShop.logo" />
        <span class="shop-name">{{ getShop.name }}</span>
      </div>
      <div class="right">
        <div class="item">
          <div class="count">{{ getShop.collection | countFilter }}</div>
          <div class="text">关注</div>
        </div>
        <div class="item">
          <div class="count">{{ getShop.sales | countFilter }}</div>
          <div class="text">总销量</div>
        </div>
        <div class="item">
          <div class="count">{{ getShop.shopItem }}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    getShop() {
      return this.shop
    }
  },
  filters: {
    countFilter(val) {
      if (val < 10000) return val
      return (val / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style lang="stylus" scoped>
.shop-info
  padding 20px 8px
  border-bottom 5px solid #f2f5f8

  .container 
    display flex
    align-items center
    margin-top 15px

    .left
      display flex
      padding-right 20px
      line-height 45px
      align-items center
      border-right 1px solid rgba(0, 0, 0, .1)

      img
        width 45px
        height 45px
        border-radius 50%
        border 1px solid rgba(0, 0, 0, .1)

      .shop-name
        margin-left 10px
        vertical-align center

    .right
      flex 1
      display flex
      justify-content space-evenly
      text-align center
      color #333

      .item
        flex 1

        .count
          font-size 18px

        .text
          margin-top 10px
          font-size 12px

  .bottom
    margin-top 20px
    text-align center

    .enter-shop
      display inline-block
      width 150px
      height 30px
      line-height 30px
      text-align center
      font-size 14px
      border-radius 10px
      background-color #f2f5f8
</style>
