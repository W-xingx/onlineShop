<template>
  <div class="register">
    <!--顶部-->
    <div class="regis_top">
      <a href="#/me">&lt;</a>
      <a href="#/register">注册</a>
      <a href="#/login">登录</a>
    </div>
    <!--个人信息-->
    <div class="regis_info">
      <ul class="info_sum">
        <li class="info_phone">
          手机号：<input type="text" class="phone_num" v-model="phone" name="num1">
        </li>
        <li class="info_phone">
          密&nbsp;&nbsp;&nbsp;码：<input type="password" class="phone_num" v-model="password" name="num2">
        </li>
        <li class="info_phone">
          验证码：<input type="text" class="phone_num" v-model="code" name="num3">
          <span class="code_get" @click="get()">点击获取</span>
        </li>
      </ul>
      <a href="#" class="info_next" @click="register()">下一步</a>
      <div class="info_agree">
        <input type="checkbox" class="agree_box" v-model="check">
        <a href="#" class="agree_word">我已阅读并同意使用条款和隐私政策</a>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import qs from 'qs';
export default {
  data () {
    return {
        phone:'',
        password:'',
        code:'',
        check:false,
    };
  },
  methods:{
      get(){
          var reg = /^1[3-9][0-9]{9}$/;
          if(reg.test(this.phone)){
            this.$http({
              url:'http://localhost:3000/captcha/sent',
              params:{
                  phone:this.phone,
              },
            }).then((res)=>{
                console.log(res);
            });
          }else {
              alert('请输入正确的手机号');
          }
      },
    register(){
          var params = {
              phone:this.phone,
              password:this.password,
          };
      var reg = /^1[3-9][0-9]{9}$/;
      if(this.phone == ''|| this.password == '' || this.code == false || this.check == false){
          alert("手机号或密码或验证码不能为空或者协议不同意");
      }else if(!reg.test(this.phone)){
        alert("手机号格式错误");
      }else if(this.password.length<6 || this.password.length>32){
        alert("密码长度需要在6-32位");
      }else{
          this.$http({
            url:'http://localhost:3000/captcha/verify',
            params:{
                phone:this.phone,
                captcha:this.code,
            },
          }).then((res)=>{
//              console.log(res,1111);
              if(res.status === 200){
//                  console.log('验证码ok');
                  this.$http({
                    url:'http://yd.msword.top/register',
                    method:'post',
                    data:qs.stringify(params),
                  }).then((res)=>{
//                      console.log(res,2222);
                      alert(res.data.msg);
                  });
              }
          });
      };
    },
  },




}
</script>

