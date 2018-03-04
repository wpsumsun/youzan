import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import 'css/common.css'
import './category.css'

new Vue({
  el: '#app',
  components: {
  },
  mixins: [mixin],
  data: {
    topLists: null,
    curIndex: 0,
    sublists: null,
    rankData: null,
  },
  created() {
    this.getTopLists()
    this.getSubLists(0, 0)
  },
  methods: {
    getTopLists() {
      axios.get(url.toplists).then((res) => {
        this.topLists = res.data.lists
      }).catch(err => console.log(err))
    },
    getSubLists(id, index) {
      this.curIndex = index
      if (index === 0) {
        this.getRank()
        return
      }
      axios.post(url.sublists, { id }).then(res => {
        this.sublists = res.data.data
      }).catch(err => console.log(err))
    },
    getRank() {
      axios.post(url.rank).then(res => {
        this.rankData = res.data.data
      }).catch(err => console.log(err))
    },
    goSearch(category) {
      location.href = `search.html?keyword=${category.name}&id=${category.id}`
    },
  },
})
