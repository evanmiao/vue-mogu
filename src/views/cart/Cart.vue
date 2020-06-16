<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartCount }})</div>
    </nav-bar>
    <cart-list class="cart-list" :cart-list="cartList"></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/base/NavBar'
import CartList from './components/CartList'
import BottomBar from './components/BottomBar'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    BottomBar
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList
    },
    cartCount() {
      return this.$store.getters.cartCount
    }
  }
}
</script>

<style lang="stylus" scoped>
#cart
  height 100vh

  .nav-bar
    background-color $color-main
    font-weight 700
    color #fff

  .cart-list
    position absolute
    top 44px
    bottom 94px
    width 100%
</style>
