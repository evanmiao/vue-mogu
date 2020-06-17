<template>
  <div id="list">
    <div v-for="(item, index) in listData" :key="index" class="item">
      <span class="icon">
        <svg :fill="item.iconColor">
          <use :xlink:href="item.icon" />
        </svg>
      </span>
      <div class="info">{{ item.info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  props: {
    listData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#list
  font-size 15px
  color #333
  background-color #fff

  .item
    position relative
    height 44px
    line-height 44px

    .icon
      position absolute
      top -7px
      left 16px
      margin-top 10px

      svg
        width 18px
        height 18px

    .info
      padding-left 5px
      margin-left 40px
      border-bottom 1px solid rgba(100, 100, 100, .1)

    &:last-of-type
      .info
        border-bottom none
</style>
