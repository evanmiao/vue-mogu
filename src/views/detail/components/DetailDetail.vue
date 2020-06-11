<template>
  <div class="detail" v-if="Object.keys(detail).length">
    <div class="desc clearfix">
      <div class="start fl"></div>
      <div class="desc">{{ detail.desc }}</div>
      <div class="end fr"></div>
    </div>
    <div class="list">
      <img v-for="(item, index) in detail.detailImage" :key="index" :src="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailDetail',
  props: {
    detail: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
.detail
  padding 20px 0
  border-bottom 5px solid #f2f5f8

  .desc
    padding 0 15px

    .start,
    .end
      position relative
      width 90px
      height 1px
      background-color #a3a3a5

    .start::before,
    .end::after
      content ""
      position absolute
      bottom 0
      width 5px
      height 5px
      background-color #333

    .end::after
      right 0

    .desc
      padding 15px 0
      font-size 14px

  .list img
    width 100%
</style>
