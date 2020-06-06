<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in tabs"
      :key="index"
      :class="{ active: current === index }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      current: 0
    }
  },
  methods: {
    itemClick(index) {
      this.current = index
      this.$emit('itemClick', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.tab-control
  z-index 10
  display flex
  font-size 15px
  line-height 40px
  text-align center
  background-color #fff

  .tab-control-item
    flex 1

    span
      padding 5px

    &.active
      color $color-active

      span
        border-bottom 2px solid $color-active
</style>
