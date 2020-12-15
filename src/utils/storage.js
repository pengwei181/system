/**
 * cookie存储
 * @param {*} c_name 键
 * @param {*} value 值
 * @param {*} expire 时间*秒
 */
export function setCookie(c_name,value,expire) {
  var date = new Date()
  date.setSeconds(date.getSeconds() + expire)
  document.cookie = c_name + "=" + escape(value) + "; expires=" + date.toGMTString()
}
export function getCookie(c_name){
  if (document.cookie.length > 0){
    let c_start = document.cookie.indexOf(c_name + "=")
      if (c_start != -1){
        c_start = c_start + c_name.length + 1
        let c_end = document.cookie.indexOf(";", c_start)
        if (c_end == -1) c_end = document.cookie.length
        return unescape(document.cookie.substring(c_start, c_end))
      }
  }
  return ""
}
export function delCookie(c_name){
  setCookie(c_name, "", -1)
}
/**
 * localStorage存储 永久时效 每个域名5M大小
 * @param {*} c_name 键
 * @param {*} value 值
 */
export function setLocal(c_name,value) {
  localStorage.setItem(c_name, value)
}
export function getLocal(c_name){
  localStorage.getItem(c_name)
}
export function delLocal(c_name){
  localStorage.removeItem(c_name)
}
/**
 * sessionStorage存储 关闭页面失效
 * @param {*} c_name 键
 * @param {*} value 值
 */
export function setSession(c_name,value) {
  sessionStorage.setItem(c_name, value)
}
export function getSession(c_name){
  sessionStorage.getItem(c_name)
}
export function delSession(c_name){
  sessionStorage.removeItem(c_name)
}