import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import 'css/common.css'
import './index.css'

var app = new Vue({
  el: '#app',
  data: {
    lists: null,
  },
  created() {
    axios.get(url.hotLists, {
      params: {
        pageNum: 1,
        pageSize: 6
      },
    }).then((res) => {
      this.lists = res.data.lists
    })
  },
})
