/* eslint-disable */
import { parse } from 'qs';

export function format(fmt, date) {
  date = new Date(date) || new Date();
  var o = {
    "M+": date.getMonth() + 1,                 //月份 
    "d+": date.getDate(),                    //日 
    "h+": date.getHours(),                   //小时 
    "m+": date.getMinutes(),                 //分 
    "s+": date.getSeconds(),                 //秒 
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
    "S": date.getMilliseconds()             //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

// 按ascII码排序对象
export function sortASCII(obj) {
  const arr = new Array();
  let num = 0;
  for (let i in obj) {
    arr[num] = i;
    num++;
  }
  const sortArr = arr.sort();
  const sortObj = {};
  for (let i in sortArr) {
    sortObj[sortArr[i]] = obj[sortArr[i]];
  }
  return sortObj;
}

export function parseQueryString(url) {
  url = url == null ? window.location.href : url
  if (url.lastIndexOf('?') === -1 || url.lastIndexOf('?') === (url.length - 1)) return {};
  var search = url.substring(url.lastIndexOf('?') + 1)
  if (!search) {
    return {};
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}

export function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    if (name === 'lang') {
      switch (unescape(r[2]).slice(0, 2)) {
        case 'zh':
          return 'zh-CN'
        case 'en':
          return 'en-US'
        case 'es':
          return 'es-MX'
        case 'pt':
          return 'pt-BR'
      }
    }
    return unescape(r[2]);
  }
  return null;
}

export function scrollIntoView(ref) {
  setTimeout(() => {
    ref.scrollIntoView({ behavior: 'smooth' });
    ref.scrollIntoViewIfNeeded();
    ref.scrollIntoView(true);
  }, 400);
}

export function numberToK(n) {
  return n >= 1000 ? `${Math.floor(+n / 1000)}K` : +n;
}

export function numberTo10K(n) {
  return n >= 10000 ? `${+n / 1000}K` : +n;
}

export function numberToM(n) {
  if (+n >= 100000000) {
    return `${Math.floor(+n / 1000000)}M`
  } else if (+n >= 1000000) {
    return `${Math.floor(+n / 1000)}K`
  }
  return +n;
}

/**
 * 
 * @desc 根据name读取cookie
 * @param  {String} name 
 * @return {String}
 */
export function getCookie(name) {
  var arr = document.cookie.replace(/\s/g, "").split(';');
  for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i].split('=');
    if (tempArr[0] == name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return '';
}

export function addParamsToUrl(query, urlString) {
  const url = new URL(urlString);
  query && Object.keys(query).map(key => {
    url.searchParams.append(key, query[key]);
  });
  return url.href;
}

export function compareVersion(currentVersion, featureVersion) {
  const versionToNum = (version) => {
    const list = version.split('.');
    return +list[0] * 10000 + (+list[1] * 100) + (+list[2])
  }
  return versionToNum(currentVersion) >= versionToNum(featureVersion);
}

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

export function isiOS() {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

export function deleteNullAttr(obj) {
  if (typeof obj !== 'object') {
    return {};
  }
  Object.keys(obj).map(item => {
    return (obj[item] === '' || obj[item] === undefined || obj[item] === null) && delete obj[item];
  });
  return obj;
}
