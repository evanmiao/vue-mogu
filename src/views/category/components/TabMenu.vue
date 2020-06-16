<template>
  <scroll id="tab-menu">
    <div class="menu-list">
      <div
        class="menu-list-item"
        :class="{ active: index === currentIndex }"
        v-for="(item, index) in categories"
        :key="index"
        @click="itemClick(index)"
      >{{ item.title }}</div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/base/Scroll'

export default {
  name: 'TabMenu',
  components: {
    Scroll
  },
  props: {
    categories: Array
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
#tab-menu
  width 100px
  height 100%
  background-color #f6f6f6
  box-sizing border-box

  .menu-list-item
    height 45px
    line-height 45px
    text-align center
    font-size 14px

    &.active
      font-weight 700
      color $color-active
      background-color #fff
      border-left 3px solid $color-active
</style>
