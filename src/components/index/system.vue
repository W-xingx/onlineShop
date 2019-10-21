<template>
  <div class="syste">
    <!--顶部-->
    <div class="system_top">
      <input type="text" class="system_search" placeholder="Montagne jeunesse">
      <span class="system_ico"></span>
    </div>
    <!--显示框左右结构-->
    <div class="system_show">
      <!--左边-->
        <div class="show_left">
          <ul class="system_titl">
            <li class="system_active" @click="change1($event)">
              <span></span>
              <router-link to="/syst">母婴专区 </router-link>
            </li>
            <li @click="change1($event)">
            <span></span>
            <router-link to="/make">美妆护肤 </router-link>
          </li>
            <li @click="change1($event)">
              <span></span>
              <router-link to="/life">家居生活 </router-link>
            </li>
            <li @click="change1($event)">
              <span></span>
              <router-link to="/food">食品营养 </router-link>
            </li>
            <li @click="change1($event)">
              <span></span>
              <router-link to="/mail">全球直邮 </router-link>
            </li>
          </ul>
        </div>
      <!--右边-->
        <div class="show_right">
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data () {
    return {

    };
  },
  methods:{
    change1(ev){
//        console.log(ev.target);
       $(ev.target).parent().attr('class','system_active');
       $(ev.target).parent().siblings().attr('class','');

    },
  },
}
</script>
