<template>
  <div class="feature">
    <div class="feature-item" v-for="(item, index) in feature" :key="index">
      <a :href="item.link">
        <img :src="item.img">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  props: {
    feature: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.feature
  display flex
  padding-bottom 30px
  margin-top 10px
  border-bottom 10px solid #eee
  font-size $font-size-base

  .feature-item 
    flex 1
    text-align center

    img
      width 80px
      height 80px
      margin-bottom 10px
</style>
