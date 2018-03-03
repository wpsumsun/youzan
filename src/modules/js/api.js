let host = 'http://rap.taobao.org/mockjsdata/24170'
let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
}

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
