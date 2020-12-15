/**
 * 获取当前时间
 * 格式YYYY-MM-dd
 */
export function getNowFormatDate() {
  let date = new Date();
  let seperator1 = "-";
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  let currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}
/**
 * 格式化时间
 * var time = "2018-08-08T08:00:28";
 * 1: formatDate(time, 'yyyy/MM/dd hh:mm:ss'); // 格式化指定时间:2018/08/08 08:00:28
 * 2: formatDate('', 'yyyy/MM/dd hh:mm:ss'); // 获取今天日期 格式化
 */
export function formatDate(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  let currentDate;
  !date ? currentDate = new Date() : currentDate = new Date(date);
  var o = {
    "M+": currentDate.getMonth() + 1, //月份
    "d+": currentDate.getDate(), //日
    "h+": currentDate.getHours(), //小时
    "m+": currentDate.getMinutes(), //分
    "s+": currentDate.getSeconds(), //秒
    "q+": Math.floor((currentDate.getMonth() + 3) / 3), //季度
    "S": currentDate.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (currentDate.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
/**
 * 30天之前-到-今天的日期（num:30天之前） 
 * 返回格式['2019-03-20','2019-04-20']
 */
export function arrayDate(num = 30) {
  let today = new Date().getTime();// 今天日期
  let ftoday = today - 60 * 60 * 1000 * 24 * num; // num：30天之前
  function dateFrom(val) {
    let date = new Date(val);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    if (m >= 1 && m <= 9) {
      m = "0" + m;
    }
    if (d >= 0 && d <= 9) {
      d = "0" + d;
    }
    return  y + '-' + m + '-' + d;
  }
  let l = dateFrom(today);
  let f = dateFrom(ftoday);
  return [f,l];
}
/*****
 * 时间处理
 * * */
export function timeHandle(hour) {
  let chineseNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
  let returnTime = {}
  let time = new Date(hour) // 取出传入值时间戳
  let year = time.getFullYear() // 取出年
  let month = time.getMonth() + 1 // 取出月
  let months = chineseNumbers[month - 1] + '月'
  let getDate = time.getDate() // 取出当前几号
  let day = new Date(year, month - 1, 1).getDay() // 取出当前月1号为星期几，0为星期天
  let lastMonth = new Date(year, month - 1, 0).getDate() // 取出上一月有多少天
  let numberDay = new Date(year, month, 0).getDate() // 取出当前月共有多少天
  let nextMonth = new Date(year, month, 1).getDay() // 取出下一月1号为星期几，0为星期天
    // nextMonth = nextMonth === 1 ? 0 : 8 - nextMonth // 计算下一月有多少天展示到当前月
  if (nextMonth === 0) {
    nextMonth = 1
  } else if (nextMonth === 1) {
    nextMonth = 0
  } else {
    nextMonth = 8 - nextMonth
  }
  returnTime.year = year
  returnTime.months = months
  returnTime.month = month
  returnTime.getDate = getDate
  returnTime.day = day
  returnTime.lastMonth = lastMonth
  returnTime.numberDay = numberDay
  returnTime.nextMonth = nextMonth
  return returnTime
}
/**
 * 格式化金额
 * currency(5000,"$",2) // $5,000.00
 */
const digitsRE = /(\d{3})(?=\d)/g
export function currency (value, currency, decimals) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}
/**
* 判断是否是数组 
* Array.isArray([]) 发现IE8及以下版本不支持此API
* 此方法ie所有版本均支持
*/
export function isArray (obj) { 
  return Object.prototype.toString.call(obj) === '[object Array]'; 
}
/**
* 判断电话号码是否符合
*/
export function isPhone (val) { 
  let reg = /^1[345789]\d{9}$/;
  return reg.test(val)
} 
/**
 * 判断金额是否符合规则(true 符合/ false 不符合)
*/
export function isMoney (val) { 
  // 金额正则
  let reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
  return reg.test(val) && val > 0
} 
