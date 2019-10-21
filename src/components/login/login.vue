<template>
  <div class="login">
    <!--顶部-->
    <div class="regis_top">
      <a href="#/me">&lt;</a>
      <a href="#/login">登录</a>
      <a href="#/register">注册</a>
    </div>
    <!--个人信息-->
    <div class="regis_info">
      <ul class="info_sum">
        <li class="info_phone">
          手机号：<input type="text" class="phone_num" v-model="phone">
        </li>
        <li class="info_phone">
          密&nbsp;&nbsp;&nbsp;码：<input type="password" class="phone_num" v-model="password">
        </li>
      </ul>
      <a href="#" class="info_forget">忘记密码</a>
      <a href="#" class="info_next" @click="login()">登录</a>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
          phone:'',
         password:'',
         tag:true,
      };
    },
  methods:{
       login(){
         var obj ={
             phone:this.phone,
             password:this.password,
             tag:this.tag,
         };
           this.$http({
             url:'http://yd.msword.top/login',
             params:obj,
           }).then((res)=>{
//               console.log(res);
               if(res.status === 200){
                 sessionStorage.setItem('user',JSON.stringify(obj));
                  this.$router.push({
                    path:'/me',
                  });
               };
           });
       },
  }
}
</script>
