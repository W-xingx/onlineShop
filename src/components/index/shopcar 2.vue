<template>
  <div class="shopcar">
     <div class="shopcar_top">
       <h1 class="shop_car">
         <span class="shop_come" @click="back()">&lt;</span>
         <span class="shop_tru">购物车</span>
       </h1>
     </div>
     <!--商品-->
    <div class="shop_pro" v-show="flag">
      <div class="shop_house" v-for="(item,index) in storeArr" :key="index">
        <h2 class="house_top">
          <span class="house_ima"></span>
          <span class="house_area">杭州保税区仓</span>
        </h2>
        <div class="house_cont">
          <div class="house_buy">
            <img :src="imaArr[index]" class="buy_ima" @click="change1(index)">
          </div>
          <div class="house_count">
            <img :src="item.pic" class="count_ima">
          </div>
          <div class="count_price">
            <div class="price_asd">
              <span class="price_name">{{item.name}}</span>
              <span class="price_spel">{{item.big}}</span>
            </div>
            <div class="price_add">
              <span @click="sub(index)">-</span>
              <span>{{numArr[index]}}</span>
              <span @click="add2(index)">+</span>
            </div>
          </div>
          <div class="count_sum">
            <span>￥{{item.price}}</span>
          </div>
          <div class="count_dele" v-show="flagArr[index]" @click="delet(index)">
            <span>删除</span>
          </div>
        </div>
     </div>
  </div>
    <!--去结算-->
    <div class="settle_ment" v-show="flag">
      <div class="settle_full" @click="all()">
        <img :src="allStr" class="settle_imao">
        <div>全选</div>
      </div>
      <div class="settle_edit" @click="edit()">
        <img :src="editStr" class="settle_imao">
        <div>编辑</div>
      </div>
      <div class="settle_price">
        <p>合计：{{sumPrice}}</p>
        <p>不含运费</p>
      </div>
      <div class="settle_sett">
        <span>去结算</span>
      </div>
    </div>
    <!--购物车空空如也-->
     <div class="shopcar_empty" v-show="!flag">
       <img src="../../assets/images/car1.jpg">
       <div class="empty_word">
         <p>购物车还是空的</p>
         <p>快去逛逛吧~</p>
       </div>
     </div>
  </div>
</template>


<script>
  var n = 0;
  var m = 0;
export default {
    data(){
        return {
             flag:false,
             obj:{},
             storeArr:[],
             numArr:[],
             tagArr:[],
             imaArr:[],
             sumPrice:0,
             allStr:"../../../static/3.png",
             editStr:"../../../static/2.png",
             flagArr:[],
        };
    },
  methods:{
    back(){
        this.$router.go(-1);
    },
    add2(ind){
      var n = this.numArr[ind];
      n++;
      if(n == this.storeArr[ind].total){
        n = this.storeArr[ind].total;
        this.$set(this.numArr,ind,n);
        return;
      }else {
        var a = 0;
        this.$set(this.numArr,ind,n);
        if(this.tagArr[ind] === true){
          this.tagArr.map((value,index)=>{
              if(value === true){
                a += this.numArr[index]*this.storeArr[index].price;
              };
          });
          this.sumPrice = a;
        };
      };
    },
    sub(ind){
      var n = this.numArr[ind];
      n--;
      if(n < 1){
        n = 1;
        this.$set(this.numArr,ind,1);
        return;
      }else {
        this.$set(this.numArr,ind,n);
        var a = this.sumPrice;
        if(this.tagArr[ind] === true){
          a = a - this.storeArr[ind].price;
          this.sumPrice = a;
        }

      }
    },
    change1(ind){
        this.$set(this.tagArr,ind,!this.tagArr[ind]);
        if(this.tagArr[ind] === true){
           this.$set(this.imaArr,ind,'../../../static/1.png');
           /*计算总价*/
           this.sumPrice = this.sumPrice + this.numArr[ind]*this.storeArr[ind].price;
           /*全选选中，判断每一个的tag值*/
           var tagBlo = this.tagArr.every((value)=>{
              if(value === true){
                  return true;
              }else {
                  return false;
              };
           });
           if(tagBlo){
             this.allStr = '../../../static/1.png';
           }else{
             this.allStr = '../../../static/3.png';
           };
        }else {
          this.$set(this.imaArr,ind,'../../../static/3.png');
          this.sumPrice = this.sumPrice - this.numArr[ind]*this.storeArr[ind].price;
          /*全选选中，判断每一个的tag值*/
          var tagBlo = this.tagArr.every((value)=>{
            if(value === true){
              return true;
            }else {
              return false;
            };
          });
          if(tagBlo){
            this.allStr = '../../../static/1.png';
          }else{
            this.allStr = '../../../static/3.png';
          };
        };

    },
    //全选
    all(){
        n++;
        if(n === 1){
          this.allStr = '../../../static/1.png';
          this.sumPrice = 0;
          //所有的都变成打对勾的图
          for(let i=0;i<this.imaArr.length;i++){
              this.$set(this.imaArr,i,'../../../static/1.png');
              this.$set(this.tagArr,i,true);
              this.sumPrice += this.numArr[i]*this.storeArr[i].price;
          };

        }else {
            n = 0;
            this.allStr = '../../../static/3.png';
            this.sumPrice = 0;
          for(let i=0;i<this.imaArr.length;i++){
            this.$set(this.imaArr,i,'../../../static/3.png');
            this.$set(this.tagArr,i,false);
            this.sumPrice = 0;
          };
        }
    },
    //编辑
    edit(){
        m++;
        if(m === 1){
            this.editStr = '../../../static/4.png';
          for(let i=0;i<this.imaArr.length;i++){
            this.$set(this.flagArr,i,true);
          };
        }else {
            m = 0;
          this.editStr = '../../../static/2.png';
          for(let i=0;i<this.imaArr.length;i++){
            this.$set(this.flagArr,i,false);
          };
        }
    },
    //删除
    delet(ind){
        if(this.tagArr[ind] === true){
          this.storeArr.splice(ind,1);
          this.numArr.splice(ind,1);
          this.tagArr.splice(ind,1);
          this.imaArr.splice(ind,1);
          this.flagArr.splice(ind,1);
          sessionStorage.removeItem(ind);
        }else {
            return;
        }
    }
  },
  mounted(){
       var arr = [];
       var user = JSON.parse(sessionStorage.getItem('user'));
       if(user == null){
           this.flag = false;
           sessionStorage.clear();
           alert("请先进行登录！");
           return ;
       }else {
         var obj = JSON.parse(sessionStorage.getItem('0'));
         if(obj == null){
           this.flag = false;
           return ;
         }else{
           this.flag = true;
           for(let i=0;i<sessionStorage.length-1;i++){
               arr[i] = JSON.parse(sessionStorage.getItem(i.toString()));
               this.numArr[i] = JSON.parse(sessionStorage.getItem(i.toString())).num;
               this.tagArr[i] = JSON.parse(sessionStorage.getItem(i.toString())).tag;
               this.imaArr[i] = JSON.parse(sessionStorage.getItem(i.toString())).ima;
               this.flagArr[i] = JSON.parse(sessionStorage.getItem(i.toString())).tag;
           };
           if(arr.length === 0){
               return;
           }else {
             arr.map((value,index)=>{
               arr.map((val,ind)=>{
                 if(value.pid == val.pid && index != ind){
                     if(value.big == val.big){
                       this.$set(this.numArr,index,this.numArr[index]+this.numArr[ind]);
                       this.tagArr.splice(ind,1);
                       this.imaArr.splice(ind,1);
                       this.flagArr.splice(ind,1);
                       arr.splice(ind,1);
//                       sessionStorage.removeItem(ind);
                     }else {
                         return;
                     }
                 }

               });
             });
             this.storeArr = arr;
           };
         };
       };

  },
}

</script>
