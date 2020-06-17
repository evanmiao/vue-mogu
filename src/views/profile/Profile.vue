<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <UserInfo></UserInfo>
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
  </div>
</template>

<script>
import NavBar from '@/components/base/NavBar'
import UserInfo from './components/UserInfo'
import ListView from './components/ListView'

export default {
  name: 'Profile',
  components: {
    UserInfo,
    ListView,
    NavBar
  },
  data() {
    return {
      orderList: [
        { icon: '#order', iconColor: '#ff8198', info: '我的消息' },
        { icon: '#point', iconColor: '#fc7b53', info: '积分商城' },
        { icon: '#vip', iconColor: '#ffc636', info: '会员卡' }
      ],
      serviceList: [
        { icon: '#service', iconColor: '#ff8198', info: '我的购物车' },
        { icon: '#download', iconColor: '#ff8198', info: '下载购物APP' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
#profile
  background-color #f2f2f2

  .nav-bar
    font-weight 700
    color #fff
    background-color $color-main

  .account
    display flex

    .account-item
      width 100%
      padding 18px
      margin-right 1px
      text-align center
      font-size 13px
      color #666
      background-color #fff

      &:last-of-type
        margin-right 0

      .balance
        font-size 24px
        font-weight 700
        color #ff5f3e

      .account-info
        margin-top 6px

  .order-list,
  .service-list
    margin-top 12px
</style>
