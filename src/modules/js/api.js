let host = 'http://rap.taobao.org/mockjsdata/23334'
let url = {
  hotLists: '/index/hotLists'
}

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
