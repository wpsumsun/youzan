let host = 'http://rap.taobao.org/mockjsdata/24170'
let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  toplists: '/category/topList',
  sublists: '/category/subList',
  rank: '/category/rank',
  searchlist: '/search/list',
}

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
