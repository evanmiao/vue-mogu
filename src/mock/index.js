import Mock from 'mockjs'
const Random = Mock.Random

const baseUrl = process.env.VUE_APP_BASE_API

const homeMultidata = () => {
  return Mock.mock({
    code: '0000',
    msg: '请求成功',
    data: {
      'banner|4': [
        {
          'img|+1': [
            Random.image()
          ]
        }
      ],
      'recommend|4': [
        {
          'img|+1': [
            Random.image()
          ]
        }
      ]
    }
  })
}

Mock.mock(`${baseUrl}/home/multidata`, 'get', homeMultidata)