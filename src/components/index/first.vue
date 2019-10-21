<template>
  <div class="hello">
    <!--顶部-->
    <div class="first_top">
      <div class="first_banner">
        <input type="text" class="first_search" placeholder="Montagne jeunesse">
        <span class="search_ico"></span>
      </div>
    </div>
      <!--今日疯抢-->
      <div class="hello_title">
        <div class="tit_head">
          <span class="tit_fire"></span>
          <h2>{{todayArr.name}}</h2>
        </div>
        <ul class="tit_today">
          <li v-for="(item,index) in todayArr.list" :key="index" @click="send(item.id)">
            <img :src="item.thumbnail" class="today_img">
            <div class="today_price">
              <span class="price_tru">￥{{item.reduct_price}}</span>
              <span class="pricr_fal">￥{{item.original_price}}</span>
            </div>
            <p class="tit_name">{{item.name}}</p>
          </li>
        </ul>
      </div>
      <!--母婴专区-->
      <div class="tit_prefect" v-for="(item,index) in prefectArr" :key="index">
        <div class="tit_head">
          <span :class="classArr[index]"></span>
          <h2>{{item.name}}</h2>
        </div>
        <ul class="tit_today">
          <li v-for="(val,ind) in item.list" @click="send(val.id)">
            <img :src="val.thumbnail" class="today_img">
            <p class="tit_ower">{{val.name}}</p>
            <p class="tit_nam">{{val.brand}}</p>
            <div class="today_money">
              <span class="price_sur">￥{{val.reduct_price}}</span>
              <span class="pricr_non">￥{{val.original_price}}</span>
            </div>
          </li>
        </ul>
      </div>
     <!-- &lt;!&ndash;美妆护肤&ndash;&gt;
      <div class="tit_prefect">
        <div class="tit_head">
          <span class="tit_make"></span>
          <h2>美妆护肤</h2>
        </div>
        <ul class="tit_today">
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
        </ul>
      </div>
      &lt;!&ndash;家居生活&ndash;&gt;
      <div class="tit_prefect">
        <div class="tit_head">
          <span class="tit_life"></span>
          <h2>家居生活</h2>
        </div>
        <ul class="tit_today">
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
        </ul>
      </div>
      &lt;!&ndash;食品营养&ndash;&gt;
      <div class="tit_prefect">
        <div class="tit_head">
          <span class="tit_food"></span>
          <h2>食品营养</h2>
        </div>
        <ul class="tit_today">
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
        </ul>
      </div>
      &lt;!&ndash;全球直邮&ndash;&gt;
      <div class="tit_prefect">
        <div class="tit_head">
          <span class="tit_mail"></span>
          <h2>全球直邮</h2>
        </div>
        <ul class="tit_today">
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/01.png" class="today_img">
            <p class="tit_ower">美国/SUPER </p>
            <p class="tit_nam">MILD沐浴露500ml</p>
            <div class="today_money">
              <span class="price_sur">￥88.00</span>
              <span class="pricr_non">￥96.00</span>
            </div>
          </li>
        </ul>
      </div>-->
  </div>
</template>

<script>
  import $ from 'jquery';
export default {
    data(){
        return {
            todayArr:[],
            prefectArr:[],
            classArr:['tit_pref','tit_make','tit_life','tit_food','tit_mail'],
        };
    },
  methods:{
    send(id){
        this.$router.push({
          path:'/prodetail?id='+id,
        })
    },
  },
    mounted(){
        /*今日疯抢*/
        this.$http({
          url:'http://yd.msword.top/getIndexData',
          method:'get',
        }).then((res)=>{
//            console.log(res.data.data);
            this.todayArr = res.data.data[0];
            var arr = res.data.data.splice(1);
//            console.log(arr);
            this.prefectArr = arr;
        });
    }
}
</script>
