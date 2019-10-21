<template>
  <div class="first">
    <!--显示内容-->
    <div class="first_com">
      <router-view></router-view>
    </div>
    <!--导航-->
    <div class="first_vanv">
      <ul class="vanv_clic">
        <li class="vanv_cont">
          <div class="cont_tain"  @click="change1()">
            <router-link to="/first">
              <img src="../../../static/index2.jpg" class="tain1">
              <span class="cont_word">首页</span>
            </router-link>
          </div>
        </li>
        <li class="vanv_cont">
          <div class="cont_tain" @click="change2()">
            <router-link to="/system">
              <img src="../../../static/other1.jpg" class="tain2">
              <span>分类</span>
            </router-link>
          </div>
        </li>
        <li class="vanv_cont">
          <div class="cont_tain" @click="change3()">
            <router-link to="/shopcar">
              <img src="../../../static/car1.jpg" class="tain3">
              <span>购物车</span>
            </router-link>
          </div>
        </li>
        <li class="vanv_cont">
          <div class="cont_tain" @click="change4()">
            <router-link to="/me">
              <img src="../../../static/me1.jpg" class="tain4">
              <span>我</span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
export default {
  data () {
    return {

    }
  },
  methods:{
    change1(){
            $('.tain1').attr('src','../../../static/index2.jpg');
            $('.tain1').siblings().attr('class','cont_word');

            $('.tain2').attr('src','../../../static/other1.jpg');
            $('.tain2').siblings().attr('class','');

            $('.tain3').attr('src','../../../static/car1.jpg');
            $('.tain3').siblings().attr('class','');

            $('.tain4').attr('src','../../../static/me1.jpg');
            $('.tain4').siblings().attr('class','');
    },
    change2(){
      $('.tain1').attr('src','../../../static/index1.jpg');
      $('.tain1').siblings().attr('class','');

      $('.tain2').attr('src','../../../static/other2.jpg');
      $('.tain2').siblings().attr('class','cont_word');

      $('.tain3').attr('src','../../../static/car1.jpg');
      $('.tain3').siblings().attr('class','');

      $('.tain4').attr('src','../../../static/me1.jpg');
      $('.tain4').siblings().attr('class','');
    },
    change3(){
      $('.tain1').attr('src','../../../static/index1.jpg');
      $('.tain1').siblings().attr('class','');

      $('.tain2').attr('src','../../../static/other1.jpg');
      $('.tain2').siblings().attr('class','');

      $('.tain3').attr('src','../../../static/car2.jpg');
      $('.tain3').siblings().attr('class','cont_word');

      $('.tain4').attr('src','../../../static/me1.jpg');
      $('.tain4').siblings().attr('class','');
    },
    change4(){
      $('.tain1').attr('src','../../../static/index1.jpg');
      $('.tain1').siblings().attr('class','');

      $('.tain2').attr('src','../../../static/other1.jpg');
      $('.tain2').siblings().attr('class','');

      $('.tain3').attr('src','../../../static/car1.jpg');
      $('.tain3').siblings().attr('class','');

      $('.tain4').attr('src','../../../static/me2.jpg');
      $('.tain4').siblings().attr('class','cont_word');
    },
  }
}
</script>
