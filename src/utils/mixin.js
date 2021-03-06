export const backTopMixin = {
  data() {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    }
  }
}

export const tabControlMixin = {
  data() {
    return {
      current: 0,
      currentType: 'pop'
    }
  },
  methods: {
    tabClick(index) {
      this.current = index
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    }
  }
}
