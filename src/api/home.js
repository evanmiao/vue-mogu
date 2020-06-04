import request from '@/utils/request'

export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/goodsdata',
    params: {
      type,
      page
    }
  })
}