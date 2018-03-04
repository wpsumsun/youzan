import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import url from 'js/api.js'
import './search.css'
import 'css/common.css'
import mixin from 'js/mixin.js'
import Velocity from 'velocity-animate'

let { keyword, id } = qs.parse(location.search.substr(1))

new Vue({
  el: '.container',
  data: {
    searchLists: null,
    keyword,
    isShowTop: false,
  },
  mixins: [mixin],
  created() {
    this.getSearchList()
  },
  methods: {
    getSearchList() {
      axios.post(url.searchlist, { keyword, id }).then(res => {
        this.searchLists = res.data.lists
      })
    },
    move() {
      if (document.body.scrollTop > 100) {
        this.isShowTop = true
        return
      }
      this.isShowTop = true
    },
    goTop() {
      Velocity(document.body, 'scroll', { dulation: 400 })
    },
  },
})
