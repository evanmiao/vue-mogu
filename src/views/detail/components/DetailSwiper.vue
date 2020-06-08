<template>
  <swiper class="detail-swiper" v-if="getImages.length">
    <swiper-item v-for="(item, index) in getImages" :key="index">
      <img :src="item" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/base/Swiper'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    getImages() {
      return this.images
    }
  }
}
</script>

<style lang="stylus" scoped>
.detail-swiper
  height 300px
</style>