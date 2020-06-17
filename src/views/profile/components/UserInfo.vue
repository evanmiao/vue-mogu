<template>
  <div id="user-info">
    <a href="#" class="clearfix">
      <slot name="user-icon">
        <svg class="privateImage-svg fl">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
        </svg>
      </slot>
      <div class="login-info fl">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span>
            <svg fill="#fff" class="icon-mobile"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use></svg>
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <svg fill="#fff" class="arrow-svg fr"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style lang="stylus" scoped>
#user-info
  padding 15px
  margin-top -5px
  background-color $color-main

  .privateImage-svg
    width 60px
    height 60px
    background-color #fff
    border-radius 30px

  .login-info
    margin 10px 0 0 10px
    color #fff

    .phone
      position relative
      margin 5px 0 0 15px
      font-size 13px
      font-weight 300

      .icon-mobile
        position absolute
        top 0px
        left -15px
        width 12px
        height 18px

  .arrow-svg
    width 11px
    height 22px
    margin-top 18px
</style>
