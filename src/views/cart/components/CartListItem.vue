<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton @checkBtnClick="checkedChange" v-model="itemInfo.checked"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="itemInfo.imgURL" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">商品描述:{{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ itemInfo.price }}</div>
        <div class="item-count right">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

export default {
  name: 'ShopCartItem',
  props: {
    itemInfo: Object
  },
  components: {
    CheckButton
  },
  methods: {
    checkedChange: function() {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}
</script>

<style lang="stylus" scoped>
#shop-item
  display flex
  width 100%
  padding 5px
  font-size 0
  border-bottom 1px solid #ccc
  box-sizing border-box

  .item-selector
    display flex
    justify-content center
    align-items center
    width 14%

  .item-title,
  .item-desc
    overflow hidden
    white-space nowrap
    text-overflow ellipsis

  .item-img
    padding 5px
    // border 1px solid #ccc

    img
      display block
      width 80px
      height 100px
      border-radius 5px

  .item-info
    position relative
    padding 5px 10px
    font-size 17px
    color #333
    overflow hidden

    .item-desc
      margin-top 15px
      font-size 14px
      color #666

    .info-bottom
      position absolute
      bottom 10px
      left 10px
      right 10px
      margin-top 10px

      .item-price
        color orangered
</style>
