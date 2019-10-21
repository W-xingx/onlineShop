<template>
  <div class="me">
    <!--顶部-->
    <div class="me_single">
      <div class="single_set">
        <img src="../../assets/images/set1.png">
      </div>
      <p class="single_cen">个人中心</p>
      <div class="single_info">
        <img src="../../assets/images/news.png">
      </div>
    </div>
    <!--头像部分-->
    <div class="me_avatar">
      <a href="#/login" class="avatar_ima" v-show="!flag"></a>
      <a href="#/login" class="avatar_word" v-show="!flag">点击登录</a>
      <img class="avatar_ima" src="../../assets/images/pic8.jpg" v-show="flag">
      <span class="avatar_word" v-show="flag">用户{{phone}}</span>
      <div class="avatar_coll">
        <img src="../../assets/images/keep.png" class="colle_ima">
        <span class="colle_my">我的收藏</span>
      </div>
    </div>
    <!--我的订单-->
    <div class="me_order">
      <div class="order_more">
        <h2 class="order_my">我的订单</h2>
        <a href="#" class="order_look">查看更多订单</a>
      </div>
      <div class="order_wait">
        <div class="order_boli">
          <img src="../../assets/images/boli.png" class="boli_ima">
          <div class="boli_pay">待付款</div>
        </div>
        <div class="order_boli">
          <img src="../../assets/images/pre.png" class="boli_ima">
          <div class="boli_pay">待发货</div>
        </div>
        <div class="order_boli">
          <img src="../../assets/images/cons.png" class="boli_ima">
          <div class="boli_pay">待收货</div>
        </div>
        <div class="order_boli">
          <img src="../../assets/images/eva.png" class="boli_ima">
          <div class="boli_pay">待评价</div>
        </div>
        <div class="order_boli">
          <img src="../../assets/images/refu.png" class="boli_ima">
          <div class="boli_pay">退货/售后</div>
        </div>
      </div>
    </div>
    <!--收货地址管理-->
    <div class="me_receipt">
        <a href="#" class="rece_address">收货地址管理</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        flag:false,
        phone:'',

    };
  },
  mounted(){
     var user = JSON.parse(sessionStorage.getItem('user'));
     if(user == null){
         this.flag = false;
         return;
     }else{
       this.flag = user.tag;
       this.phone = user.phone;
     }

  },
}
</script>
