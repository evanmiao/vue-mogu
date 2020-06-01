<template>
  <div id="swiper">
    <div class="swiper-wrap" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && itemCount > 1">
        <div
          class="indicator-item"
          v-for="(item, index) in itemCount"
          :key="index"
          :class="{ active: index === currentIndex - 1 }"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      itemCount: 0, // 元素个数
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false // 是否正在滚动
    }
  },
  mounted() {
    // 1.操作DOM, 在前后添加Slide
    setTimeout(() => {
      this.handleDom()

      // 2.开启定时器
      this.startTimer()
    }, 3000)
  },
  methods: {
    /**
     * 定时器操作
     */
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval)
    },
    stopTimer() {
      window.clearInterval(this.playTimer)
    },

    /**
     * 滚动到正确的位置
     */
    scrollContent(currentPosition) {
      // 0.设置正在滚动
      this.scrolling = true

      // 1.开始滚动动画
      this.swiperStyle.transition = 'transform ' + this.animDuration + 'ms'
      this.setTransform(currentPosition)

      // 2.判断滚动到的位置
      this.checkPosition()

      // 4.滚动完成
      this.scrolling = false
    },

    /**
     * 校验正确的位置
     */
    checkPosition() {
      window.setTimeout(() => {
        // 1.校验正确的位置
        this.swiperStyle.transition = '0ms'
        if (this.currentIndex >= this.itemCount + 1) {
          this.currentIndex = 1
          this.setTransform(-this.currentIndex * this.totalWidth)
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.itemCount
          this.setTransform(-this.currentIndex * this.totalWidth)
        }

        // 2.结束移动后的回调
        this.$emit('transitionEnd', this.currentIndex - 1)
      }, this.animDuration)
    },

    /**
     * 设置滚动的位置
     */
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`
    },

    /**
     * 操作DOM, 在DOM前后添加Slide
     */
    handleDom() {
      // 1.获取要操作的元素
      let swiperEl = document.querySelector('.swiper-wrap')
      let itemEls = swiperEl.getElementsByClassName('swiper-item')

      // 2.保存个数
      this.itemCount = itemEls.length

      // 3.如果大于1个, 那么在前后分别添加一个item
      if (this.itemCount > 1) {
        let cloneFirst = itemEls[0].cloneNode(true)
        let cloneLast = itemEls[this.itemCount - 1].cloneNode(true)
        swiperEl.insertBefore(cloneLast, itemEls[0])
        swiperEl.appendChild(cloneFirst)
        this.totalWidth = swiperEl.offsetWidth
        this.swiperStyle = swiperEl.style
      }

      // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
      this.setTransform(-this.totalWidth)
    },

    /**
     * 拖动事件的处理
     */
    touchStart(e) {
      // 1.如果正在滚动, 不可以拖动
      if (this.scrolling) return

      // 2.停止定时器
      this.stopTimer()

      // 3.保存开始滚动的位置
      this.startX = e.touches[0].pageX
    },

    touchMove(e) {
      // 1.计算出用户拖动的距离
      this.currentX = e.touches[0].pageX
      this.distance = this.currentX - this.startX
      let currentPosition = -this.currentIndex * this.totalWidth
      let moveDistance = this.distance + currentPosition

      // 2.设置当前的位置
      this.setTransform(moveDistance)
    },

    touchEnd() {
      // 1.获取移动的距离
      let currentMove = Math.abs(this.distance)

      // 2.判断最终的距离
      if (this.distance === 0) {
        return
      } else if (
        this.distance > 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        // 右边移动超过0.5
        this.currentIndex--
      } else if (
        this.distance < 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        // 向左移动超过0.5
        this.currentIndex++
      }

      // 3.移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth)

      // 4.移动完成后重新开启定时器
      this.startTimer()
    },

    /**
     * 控制上一个, 下一个
     */
    previous() {
      this.changeItem(-1)
    },

    next() {
      this.changeItem(1)
    },

    changeItem(num) {
      // 1.移除定时器
      this.stopTimer()

      // 2.修改index和位置
      this.currentIndex += num
      this.scrollContent(-this.currentIndex * this.totalWidth)

      // 3.添加定时器
      this.startTimer()
    }
  }
}
</script>

<style lang="stylus" scoped>
#swiper
  position relative
  overflow hidden

  .swiper-wrap
    display flex

  .indicator
    position absolute
    bottom 8px
    display flex
    justify-content center
    width 100%

    &-item
      width 8px
      height 8px
      margin 0 5px
      font-size 12px
      line-height 8px
      text-align center
      border-radius 4px
      background-color #fff
      box-sizing border-box

      &.active
        background-color #d43e2e
</style>
