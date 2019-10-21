<template>
  <div class="syst">
    <div class="syst_top">
      <ul class="syst_cont clearfix">
        <li v-for="(item,index) in foodArr" :key="index">
          <img :src="item.thumbnail">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        foodArr:[],
    }
  },
  mounted(){
      this.$http({
        url:'http://yd.msword.top/getClassify',
      }).then((res)=>{
          var arr = res.data.data[0].list;
          arr.push(res.data.data[1].list[0],res.data.data[1].list[1],res.data.data[1].list[2]);
//          console.log(arr);
          this.foodArr = arr;
      });
  },
}
</script>
