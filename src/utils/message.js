import { Message } from 'element-ui'
// 数据成功的提示
export function MS (message) {
  Message({
    type: 'success',
    offset: 100,
    showClose: false,
    message,
    duration: 3000
  })
}
// 数据失败的提示
export function ME (message = '网络繁忙，请稍后重试！') {
  Message({
    type: 'error',
    offset: 100,
    showClose: true,
    message,
    duration: 3000
  })
}
// 警告
export function MW (message = '警告：网络繁忙，请稍后重试！') {
  Message({
    type: 'warning',
    offset: 100,
    showClose: true,
    message,
    duration: 3000
  })
}
// 提示
export function MI (message = '提示：网络繁忙，请稍后重试！') {
  Message({
    type: 'info',
    offset: 100,
    showClose: true,
    message,
    duration: 3000
  })
}