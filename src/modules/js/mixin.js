import Foot from 'components/Foot.vue'

export default  {
  components: {
    Foot,
  },
  methods: {
    fixTwo(price) {
      return price.toFixed(2)
    },
  },
}
