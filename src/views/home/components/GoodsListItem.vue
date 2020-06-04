<template>
  <div class="goods" @click="goToDetail">
    <img v-lazy="getImg" :key="getImg" />
    <div class="goods-info">
      <p>{{ goods.title }}</p>
      <span class="price">¥{{ goods.price }}</span>
      <span class="collect">{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goToDetail() {
      // 1.获取iid
      let iid = this.goods.iid
      // 2.跳转到详情页面
      this.$router.push({ path: '/detail', query: { iid } })
    }
  },
  computed: {
    getImg() {
      return this.goods.img || this.goods.image || this.goods.show.img
    }
  }
}
</script>

<style lang="stylus" scoped>
.goods
  position relative
  padding-bottom 40px

  img
    width 100%

  .goods-info
    position absolute
    bottom 5px
    left 0
    right 0
    font-size 12px
    text-align center
    overflow hidden

    p
      margin-bottom 3px
      text-ellipsis()

    .price
      margin-right 20px
      color $color-active

    .collect
      position relative

      &::before
        content ""
        position absolute
        top 0
        left -15px
        width 14px
        height 14px
        background url("~assets/img/common/collect.svg") 0 0/14px 14px
</style>
