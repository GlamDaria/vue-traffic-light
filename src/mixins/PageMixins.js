import trafficLight from '@/components/TrafficLight'
export default{
  components: {
    trafficLight
  },
  methods:{
    dischargeCounting(){
      clearTimeout(this.setTimeout)
    },
    startCounter(){
      this.setTimeout = setTimeout(() =>{
        if (localStorage.savedTime) localStorage.removeItem('savedTime');
        this.$router.push('yellow')
      }, this.calcTime())
    }
  },
  mounted(){
      this.startCounter()
  },
  beforeDestroy(){
    if (this.setTimeout){
       clearTimeout(this.setTimeout);
    }
  }
}