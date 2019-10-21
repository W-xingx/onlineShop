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
      <div class="shop_house">
        <div v-for="(item,index) in dataArr" :key="index" class="shoreList">
          <h2 class="house_top">
            <span class="house_ima"></span>
            <span class="house_area">杭州保税区仓</span>
          </h2>
          <div class="house_cont" v-for="(val,ind) in item.crr" :key="ind">
            <div class="house_buy">
              <img src="../../../static/3.png" class="buy_ima" @click="singel($event,index,ind)">
            </div>
            <div class="house_count">
              <img :src="val.pic" class="count_ima">
            </div>
            <div class="count_price">
              <div class="price_asd">
                <span class="price_name">{{item.name}}</span>
                <span class="price_spel">{{val.big}}</span>
                <span class="price_spel">{{val.age}}</span>
              </div>
              <div class="price_add">
                <span @click="sub2(index,ind)">-</span>
                <span>{{val.num}}</span>
                <span @click="add2(index,ind)">+</span>
              </div>
            </div>
            <div class="count_sum">
              <span>￥{{val.price}}</span>
            </div>
            <div class="count_dele" v-show="tag" @click="delet(index,ind)">
              <span>删除</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--去结算-->
    <div class="settle_ment" v-show="flag">
      <div class="settle_full">
        <img src="../../../static/3.png" class="settle_imao" @click="all($event)">
        <div>全选</div>
      </div>
      <div class="settle_edit">
        <img src="../../../static/2.png" class="settle_imag" @click="edit($event)">
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
  import $ from 'jquery'
  var n = false;
  var m = false;
  var k = false;
  export default {
    data(){
      return {
        flag:false,
        tag:false,
        dataArr:[],
      };
    },
    mounted(){
      var user = JSON.parse(sessionStorage.getItem('user'));
      if(user == null){
        this.flag = false;
        alert("请先进行登录！");
        return ;
      }else {
        if(sessionStorage.length>1){
          this.flag = true;
          for(var i=0;i<=sessionStorage.length-1;i++){
            if(sessionStorage.key(i) != 'user'){
//                    console.log(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
              this.dataArr.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
            }
          }
        };
      };
    },
    methods:{
      //退回上一个页面
      back(){
        this.$router.go(-1);
      },
      //单选
      singel(ev,index,ind){
           n = !n;
           $(ev.target).attr('src',n?'../../../static/1.png':'../../../static/3.png');
          //相应的其tag值为true
           this.dataArr[index].crr[ind].tag = n;
         //假设所有的都选中，在下面的循环中判断，如果有一个不是true,那就还是没有选中
            $('.settle_imao').attr('src','../../../static/1.png');
            m = true;
            this.dataArr.map((val)=>{
              let a = val.crr.every((value)=>{
                return value.tag === true;
              });
              if(!a){
                $('.settle_imao').attr('src','../../../static/3.png');
                m = false;
              }
            });
      },
      //全选
      all(ev){
          m = !m;
          $(ev.target).attr('src',m?'../../../static/1.png':'../../../static/3.png');
          this.dataArr.map((val,ind)=>{
            val.crr.map((value,index)=>{
              value.tag = m;
              $('.shoreList').eq(ind).children('.house_cont').eq(index).find('.buy_ima').attr('src',m?'../../../static/1.png':'../../../static/3.png')
            });
        });
      },
      //编辑
      edit(ev){
          k = !k;
          this.tag = k;
          $(ev.target).attr('src',k?'../../../static/4.png':'../../../static/2.png');
      },
      //删除
      delet(index,ind){
          if(this.dataArr[index].crr[ind].tag){
              //如果crr的长度为1，直接删除整个，如果大于1，只需要删除crr中对应的那一个
              if(this.dataArr[index].crr.length === 1){
                sessionStorage.removeItem(this.dataArr[index].pid);
                this.dataArr.splice(index,1);
              }else {
                this.dataArr[index].crr.splice(ind,1);
                sessionStorage.setItem(this.dataArr[index].pid,JSON.stringify(this.dataArr[index]));
              };
          };
      },
      //数量加加
      add2(index,ind){
          this.dataArr[index].crr[ind].num++;
          if(this.dataArr[index].crr[ind].num === this.dataArr[index].total){
            this.dataArr[index].crr[ind].num = this.dataArr[index].total;
          }
      },
      //数量减减
      sub2(index,ind){
        this.dataArr[index].crr[ind].num--;
        if(this.dataArr[index].crr[ind].num <=1){
          this.dataArr[index].crr[ind].num = 1;
        }
      }

    },
    computed:{
          sumPrice(){
            var sum = 0;
            this.dataArr.map((value)=>{
              value.crr.map((val)=>{
                if(val.tag){
                  sum += val.price * val.num;
                }
              })
            });
            return sum;
          }
      },
  }
</script>
