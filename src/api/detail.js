import request from '@/utils/request'

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getDetailRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(data) {
    this.title = data.title
    this.price = data.price
    this.oldPrice = data.oldPrice
    this.discount = data.discount
    this.sales = data.sales
    this.collection = data.cfav
    this.freight = data.freight
    this.feature = data.feature
  }
}