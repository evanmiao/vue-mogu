<template>
  <swiper ref="swiper" v-if="banner.length">
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.img">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/base/swiper'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    stopTimer() {
      this.$refs.swiper.stopTimer()
    },
    startTimer() {
      if (this.$refs.swiper) {
        this.$refs.swiper.startTimer()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
