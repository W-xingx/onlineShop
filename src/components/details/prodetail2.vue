<template>
  <div class="prodetail">
      <div class="detail_top"></div>
      <!-- Swiper -->
    <div class="detail_slid">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in imgArr" :key="index">
            <img :src="item">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <a href="#/" class="detail_back">
        <img src="../../assets/images/detail3.png">
      </a>
      <a href="#/shopcar" class="detail_car">
        <img src="../../assets/images/detail1.png">
      </a>
      <a href="#/" class="detail_more">
        <img src="../../assets/images/detail2.png">
      </a>
    </div>
    <!--名字和其他内容-->
    <div class="detail_cont">
      <div class="cont_detai">
        <div class="cont_name">
          <p>{{obj.name}}</p>
        </div>
        <div class="cont_colle">
          <img src="../../assets/images/colle.png">
          <p>收藏</p>
        </div>
      </div>
      <div class="cont_price">
        <div class="price_pay">
          <span class="price_true">￥{{obj.redPrice}}</span>
          <span class="price_discou">{{obj.discount}}折</span>
          <span class="price_discou">包邮</span>
        </div>
        <div class="price_orign">
          <span class="orign_pay">￥{{obj.orginPrice}}</span>
          <span class="orign_list" v-for="(item,index) in listArr" :key="index">{{item}}</span>
         <!-- <span class="orign_list">全球直邮</span>
          <span class="orign_list">全球直邮</span>
          <span class="orign_list">全球直邮</span>-->
        </div>
      </div>
    </div>
    <!--商品详情与买家口碑-->
    <div class="detail_merchant">
      <div class="merc_hant">
        <div :class="nameArr[0]" @click="change1()">
          <a href="#">商品详情</a>
        </div>
        <div :class="nameArr[1]" @click="change2()">
          <a href="#">买家口碑</a>
        </div>
      </div>
      <!--商品详情-->
      <div class="merc_ima" v-show="flag">
        <div class="ima_each" v-for="(item,index) in shopArr" :key="index">
          <img :src="item">
        </div>
      </div>
      <!--买家口碑-->
      <div class="merc_word" v-show="!flag">
        <div class="word_eval">
          <span class="active1" @click="eval($event,'all')">全部评价</span>
          <span @click="eval($event,'good')">好评</span>
          <span @click="eval($event,'bad')">差评</span>
          <span @click="eval($event,'postf')">晒单</span>
        </div>
        <div class="word_specific">
          <ul class="spec_ific" v-show="flagObj['all']">
            <li v-for="(item,index) in allArr" :key="index">
            <div class="spec_name">
              <p>
                <span class="user_name">{{item.buyerName}}</span>
                <span class="user_time">{{item.createTime}}</span>
              </p>
            </div>
            <div class="spec_ima">
              <img :src="val" v-for="(val,ind) in item.postImg">
            </div>
            <div class="spec_pade">
              <p>{{item.postDescribe}}</p>
            </div>
            <div class="spec_admo">
              <span>管理员：</span><span>{{item.adminReviews}}</span>
            </div>
          </li>
          </ul>
          <ul class="spec_ific" v-show="flagObj['good']">
            <li v-for="(item,index) in goodArr" :key="index">
              <div class="spec_name">
                <p>
                  <span class="user_name">{{item.buyerName}}</span>
                  <span class="user_time">{{item.createTime}}</span>
                </p>
              </div>
              <div class="spec_ima">
                <img :src="val" v-for="(val,ind) in item.postImg">
              </div>
              <div class="spec_pade">
                <p>{{item.postDescribe}}</p>
              </div>
              <div class="spec_admo">
                <span>管理员：</span><span>{{item.adminReviews}}</span>
              </div>
            </li>
          </ul>
          <ul class="spec_ific" v-show="flagObj['bad']">
            <li v-for="(item,index) in badArr" :key="index">
              <div class="spec_name">
                <p>
                  <span class="user_name">{{item.buyerName}}</span>
                  <span class="user_time">{{item.createTime}}</span>
                </p>
              </div>
              <div class="spec_ima">
                <img :src="val" v-for="(val,ind) in item.postImg">
              </div>
              <div class="spec_pade">
                <p>{{item.postDescribe}}</p>
              </div>
              <div class="spec_admo">
                <span>管理员：</span><span>{{item.adminReviews}}</span>
              </div>
            </li>
          </ul>
          <ul class="spec_ific" v-show="flagObj['postf']">
            <li v-for="(item,index) in postfArr" :key="index">
              <div class="spec_name">
                <p>
                  <span class="user_name">{{item.buyerName}}</span>
                  <span class="user_time">{{item.createTime}}</span>
                </p>
              </div>
              <div class="spec_ima">
                <img :src="val" v-for="(val,ind) in item.postImg">
              </div>
              <div class="spec_pade">
                <p>{{item.postDescribe}}</p>
              </div>
              <div class="spec_admo">
                <span>管理员：</span><span>{{item.adminReviews}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--黑布-->
    <div class="detail_black" v-show="blac"></div>
    <!--购买选项-->
    <div class="detail_purcha" v-show="blac">
      <div class="purcha_top">
        <div class="purcha_comm">
          <img :src="imgArr[0]">
        </div>
        <div class="purcha_cargo">
          <span class="cargo_price">￥{{obj.redPrice}}</span>
          <p class="cargo_store">库存{{obj.total}}件</p>
          <p class="cargo_sele">请选择商品属性</p>
        </div>
        <div class="purcha_close" @click="cross()">
          <img src="../../assets/images/close.png">
        </div>
      </div>
      <div class="purcha_numb">
          <p class="numb_word">购买数量</p>
        <div class="numb_oper clearfix">
          <span class="oper_sub" @click="sub()">-</span>
          <span class="oper_num">1</span>
          <span class="oper_add" @click="add1()">+</span>
        </div>
      </div>
      <div class="purcha_other" v-for="(item,index) in seleArr" :key="index">
        <h2>{{item.name}}</h2>
        <ul class="other_mag clearfix">
          <li v-for="(val,ind) in item.list"  :class="[ind==0?'active2':'']" @click="sele1($event,index)">{{val}}</li>
        </ul>
      </div>
      <!--<div class="purcha_other">
        <h2>年龄</h2>
        <ul class="other_mag clearfix">
          <li class="active2">3岁以下</li>
          <li>5岁以下</li>
        </ul>
      </div>-->
    </div>
    <!--底部-->
    <div class="detail_bottom">
      <div class="detail_summ">
        <span class="detail_total">总价：</span>
        <span class="total_price">{{sum}}</span>
      </div>
      <div class="detail_add" @click="addShop()">
        <span>加入购物车</span>
      </div>
      <div class="detail_now">
        <span>立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
  //转换时间戳
  function doubleNum(n) {
    const str = "" + n;
    return str.padStart(2, "0");
  };
  function date(timestamp, sep = "-") {
    var _date = new Date(timestamp);
    var year = _date.getFullYear();
    var month = _date.getMonth() + 1;
    var day = _date.getDate();
    return [year, month, day].map(doubleNum).join(sep);
  };
  function time(timestamp, sep = ":") {
    var _date = new Date(timestamp);
    var hours = _date.getHours();
    var minutes = _date.getMinutes();
    var seconds = _date.getSeconds();
    return [hours, minutes, seconds].map(doubleNum).join(sep);
  };
  function dateTime(timestamp, dateSep = "-", timeSep = ":") {
    return date(timestamp, dateSep) + " " + time(timestamp, timeSep);
  };

  import $ from 'jquery';
  import Swiper from 'swiper';
  import '../../../node_modules/swiper/css/swiper.css';
  var n = 0;
  var num = 1;
  var id = -1;
export default {
  data () {
    return {
        id:'',
        imgArr:[],
        shopArr:[],
        flag:true,
        nameArr:['active',''],
        obj:{},
        listArr:[],
        allArr:[],
        goodArr:[],
        badArr:[],
        postfArr:[],
        all:true,
        postf:false,
        flagObj:{
            all:true,
            good:false,
            bad:false,
            postf:false,
        },
        blac:false,
        seleArr:[],
        sum:0,
        big:'',
        age:'',
  };
  },
  methods:{
      change1(){
          this.flag = true;
          this.nameArr[0] = 'active';
          this.nameArr[1] = '';
      },
      change2(){
        this.flag = false;
        this.nameArr[0] = '';
        this.nameArr[1] = 'active';
    },
      eval(ev,val){
        this.flagObj['all'] = false;
        this.flagObj['good'] = false;
        this.flagObj['bad'] = false;
        this.flagObj['postf'] = false;
        $(ev.target).attr('class','active1').siblings().attr('class','');
        this.flagObj[val] = true;
    },
      addShop(){
          this.blac = true;
          this.sum = this.obj.redPrice;
          n++;
          /*先判断才能转换页面*/
          if(n === 2){
              n = 0;
              var obj ={
                 num,
                 pid: this.id,
                 big:this.big+this.age,
                 pic:this.imgArr[0],
                 name:this.obj.name,
                 price:this.obj.redPrice,
                 total:this.obj.total,
                 tag:false,
                 ima:'../../../static/3.png',
                 show:true,
            };
              id++;
              sessionStorage.setItem(id,JSON.stringify(obj));
              this.$router.push({
                path:'/shopcar',
              });
          }else {
            return;
          }
        },
        cross(){
          this.blac = false;
          n = 0;
          this.sum = 0;
          $('.oper_num').html(n+1);
        },
        sele1(ev,index){
          $(ev.target).attr('class','active2').siblings().attr('class','');
          if(index == 0){
            this.big = $(ev.target).html();
          }else {
            this.age= $(ev.target).html();
          };
        },
        add1(){
              num = Number($('.oper_num').html());
              if( num == this.obj['total']){
                num = this.obj['total'];
                $('.oper_num').html(num);
                return;
              }else {
                num++;
                $('.oper_num').html(num);
                this.sum = this.obj.redPrice * num;
              }
        },
        sub(){
            num = Number($('.oper_num').html());
            if( num == 1){
              num = 1;
              $('.oper_num').html(num);
              return;
            }else {
              num--;
              $('.oper_num').html(num);
              this.sum = this.obj.redPrice * num;
            }
      },
  },
  mounted(){
      this.id = this.$router.currentRoute.query.id;
      this.$http({
        url:'http://yd.msword.top/getDetails?pid=' + this.id,
      }).then((res)=>{
//        console.log(res.data.data);
        this.imgArr = res.data.data.swiperImgArr;
        this.shopArr = res.data.data.shopDes;
        this.obj = {
            name:res.data.data.name,
            redPrice:res.data.data.reduct_price,
            orginPrice:res.data.data.original_price,
            discount: (res.data.data.reduct_price/res.data.data.original_price).toFixed(1)*10,
          // discount: (res.data.data.allowance)*10,
          total:res.data.data.total,
        };
        this.listArr = res.data.data.describe;
        res.data.data.buyerReviews.all.map((value,index)=>{
            this.allArr[index] = {
                  adminReviews:value.adminReviews,
                  buyerName:value.buyerName,
                  createTime:dateTime(Number(value.createTime)),
                  postDescribe:value.postDescribe,
                  postImg:value.postImg,
             };
        });
        res.data.data.buyerReviews.good.map((value,index)=>{
          this.goodArr[index] = {
            adminReviews:value.adminReviews,
            buyerName:value.buyerName,
            createTime:dateTime(Number(value.createTime)),
            postDescribe:value.postDescribe,
            postImg:value.postImg,
          };
        });
        res.data.data.buyerReviews.bad.map((value,index)=>{
          this.badArr[index] = {
            adminReviews:value.adminReviews,
            buyerName:value.buyerName,
            createTime:dateTime(Number(value.createTime)),
            postDescribe:value.postDescribe,
            postImg:value.postImg,
          };
        });
        res.data.data.buyerReviews.postForm.map((value,index)=>{
          this.postfArr[index] = {
            adminReviews:value.adminReviews,
            buyerName:value.buyerName,
            createTime:dateTime(Number(value.createTime)),
            postDescribe:value.postDescribe,
            postImg:value.postImg,
          };
        });
        this.seleArr = res.data.data.buySelect;
        this.big = res.data.data.buySelect[0].list[0];
        this.age = res.data.data.buySelect[1].list[0];
//        console.log(this.seleArr[0].name);
















        this.$nextTick(()=>{
          var swiper = new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
          });
        });
      });
  },
}






</script>
<style scoped>
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;

  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
