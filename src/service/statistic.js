import { http } from 'util'

const getData = () => {
  return new Promise((resolve, reject) => {
    let data = {
      userCount: 111, 
      productCount:222, 
      orderCount:333
    }
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

export default {
  // 首页数据统计
  async getHomeCount(){
    // return await http('GET', '/xxxxxxx', {}, '获取数据统计失败')
    return await getData()
  }
}