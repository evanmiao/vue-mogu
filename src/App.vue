<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <icon></icon>
    <svg-icon></svg-icon>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import Icon from '@/components/layout/Icon/Icon.vue'
import SvgIcon from '@/components/layout/Icon/svg.vue'
import MainTabBar from '@/components/layout/MainTabBar'

export default {
  name: 'app',
  components: {
    Icon,
    SvgIcon,
    MainTabBar
  }
}
</script>

<style lang="stylus" scoped>

</style>
