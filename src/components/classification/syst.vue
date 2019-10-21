<template>
  <div class="syst">
    <div class="syst_top">
      <ul class="syst_cont clearfix">
        <li v-for="(item,index) in systArr" :key="index">
          <img :src="item.thumbnail">
          <p>{{item.name}}</p>
        </li>
      <!--  <li>
          <img src="../../assets/images/01.png">
          <p>奶粉</p>
        </li>
        <li>
          <img src="../../assets/images/01.png">
          <p>奶粉</p>
        </li>
        <li>
          <img src="../../assets/images/01.png">
          <p>奶粉</p>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        systArr:[],
    }
  },
  mounted(){
      this.$http({
        url:'http://yd.msword.top/getClassify',
      }).then((res)=>{
//          console.log(res.data);
          var arr = res.data.data[0].list;
          arr.push(res.data.data[0].list[0],res.data.data[0].list[1],res.data.data[0].list[2]);
          this.systArr = arr;
      });
  },
}
</script>
