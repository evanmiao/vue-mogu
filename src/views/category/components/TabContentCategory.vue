<template>
  <div>
    <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategories.list">
      <div class="item" v-for="(item, index) in subcategories.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.img" />
          <div class="item-text">{{ item.title }}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from '@/components/base/GridView'

export default {
  name: 'TabContentCategory',
  components: {
    GridView
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.panel 
  img
    width 100%

.item
  text-align center
  font-size 12px

  &-img
    width 80%

  &-text
    margin-top 15px
</style>
