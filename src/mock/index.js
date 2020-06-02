import Mock from 'mockjs'
const Random = Mock.Random

const baseUrl = process.env.VUE_APP_BASE_API

const homeMultidata = () => {
  return Mock.mock({
    code: '0000',
    msg: '请求成功',
    data: {
      'banner|4': [{
        'img|+1': [Random.dataImage('750x350'), Random.dataImage('750x350'), Random.dataImage('750x350'), Random.dataImage('750x350')],
        'link': '#'
      }],
      'feature|4': [{
        'img|+1': [Random.dataImage('80x80'), Random.dataImage('80x80'), Random.dataImage('80x80'), Random.dataImage('80x80')],
        'link': '#',
        'title|+1': ['十点抢券', '好物特卖', '内购福利', '初秋上新']
      }]
    }
  })
}

Mock.mock(`${baseUrl}/home/multidata`, 'get', homeMultidata)