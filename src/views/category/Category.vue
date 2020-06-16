<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <scroll id="tab-content" :data="[categoryData]">
        <div>
          <tab-content-category :subcategories="showSubcategory"></tab-content-category>
          <tab-control :tabs="['综合', '新品', '销量']" :current="current" @itemClick="tabClick"></tab-control>
          <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/base/NavBar'
import Scroll from '@/components/base/Scroll'
import TabControl from '@/components/layout/TabControl'
import TabMenu from './components/TabMenu'
import TabContentCategory from './components/TabContentCategory'
import TabContentDetail from './components/TabContentDetail'
import { getCategoryData, getSubcategoryData, getSubcategoryDetail } from '@/api/category'
import { tabControlMixin } from '@/utils/mixin'

export default {
  name: 'Category',
  components: {
    NavBar,
    Scroll,
    TabControl,
    TabMenu,
    TabContentCategory,
    TabContentDetail
  },
  mixins: [tabControlMixin],
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1
    }
  },
  created() {
    // 1.请求分类数据
    this.getCategory()
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    getCategory() {
      getCategoryData().then(res => {
        // 1.获取分类数据
        this.categories = res.data.data.list
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: []
            }
          }
        }
        // 3.请求第一个分类的数据
        this.getSubcategories(0)
      })
    },
    getSubcategories(index) {
      this.currentIndex = index
      const maitKey = this.categories[index].maitKey
      getSubcategoryData(maitKey).then(res => {
        this.categoryData[index].subcategories = res.data.data
        this.categoryData = { ...this.categoryData }
        this.getCategoryDetail('pop')
        this.getCategoryDetail('sell')
        this.getCategoryDetail('new')
      })
    },
    getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey
      // 2.发送请求,传入miniWallkey和type
      getSubcategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res.data.data.list
        this.categoryData = { ...this.categoryData }
      })
    },
    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this.getSubcategories(index)
    }
  }
}
</script>

<style lang="stylus" scoped>
#category
  height: 100vh

  .nav-bar
    font-weight: 700
    color: #fff
    background-color: $color-main

  .content
    position: absolute
    left: 0
    right: 0
    top: 44px
    bottom: 49px
    display: flex

    #tab-content
      flex: 1
      height: 100%
</style>
