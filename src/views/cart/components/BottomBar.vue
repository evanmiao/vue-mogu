<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" @checkBtnClick="checkBtnClick" v-model="isSelectAll"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{ totalPrice }}</span>
    <span class="buy-product">去计算({{ $store.getters.cartCount }})</span>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

export default {
  name: 'BottomBar',
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      const cartList = this.$store.getters.cartList
      return cartList
        .filter(item => {
          return item.checked
        })
        .reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0)
        .toFixed(2)
    },
    isSelectAll() {
      return this.$store.getters.cartList.find(item => item.checked === false) === undefined
    }
  },
  methods: {
    checkBtnClick() {
      // 1.判断是否有未选中的按钮
      let isSelectAll = this.$store.getters.cartList.find(item => !item.checked)

      // 2.有未选中的内容, 则全部选中
      if (isSelectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = true
        })
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = false
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.bottom-menu
  position fixed
  bottom 50px
  left 0
  width 100%
  height 44px
  padding-left 35px
  line-height 44px
  font-size 14px
  color #888
  background-color #eee
  box-shadow 0 -2px 3px rgba(0, 0, 0, .2)
  box-sizing border-box

  .select-all
    position absolute
    top 11px
    left 10px
    line-height 0

  .total-price
    margin-left 15px
    font-size 16px
    color #666

  .buy-product
    float right
    width 100px
    height 44px
    line-height 44px
    text-align center
    color #fff
    background-color orangered
</style>
