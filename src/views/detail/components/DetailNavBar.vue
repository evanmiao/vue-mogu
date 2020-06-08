<template>
  <nav-bar class="detail-nav-bar">
    <img class="back" slot="left" @click="backClick" src="~assets/img/common/back.svg">
    <div class="title" slot="center">
      <span
        class="title-item"
        v-for="(item, index) in getNavs"
        :key="index"
        :class="{ active: index === getCurrent }"
        @click="navClick(index)"
      >{{ item }}</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/base/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  props: {
    navs: {
      type: Array,
      default() {
        return ['商品', '参数', '评论', '推荐']
      }
    },
    current: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getNavs() {
      return this.navs
    },
    getCurrent() {
      return this.current
    }
  },
  methods: {
    navClick(index) {
      this.$emit('navClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  display flex
  font-size 13px

  &-item 
    flex 1

    &.active
      color $color-active
</style>