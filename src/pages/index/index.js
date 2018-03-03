import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import swiper from 'swiper'
import 'css/common.css'
import './index.css'
import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

var app = new Vue({
  el: '#app',
  components: {
    Foot,
    Swipe
  },
  data: {
    lists: null,
    pageNum: 1,
    pageSize: 6,
    loading: false,
    allLoaded: false,
    bannerLists: null,
  },
  created() {
    this.getLists()
    this.getBanner()
  },
  methods: {
    getLists() {
      if (this.allLoaded) return
      this.loading = true
      axios.get(url.hotLists, {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        },
      }).then((res) => {
        let curLists = res.data.lists
        if (curLists.length < this.pageNum) {
          this.allLoaded = true
        }
        if (this.lists) {
          this.lists = this.lists.concat(curLists)
        } else {
          this.lists = curLists
        }
      })
      this.loading = false
      this.pageNum++
    },

    getBanner() {
      axios.get(url.banner).then((res) => {
        this.bannerLists = res.data.lists
      })
    },
  },
})
