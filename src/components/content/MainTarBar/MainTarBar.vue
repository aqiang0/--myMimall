<template>
  <div id="main-tab-bar">
    <!-- <router-view></router-view> -->
    <tab-bar>
      <tab-bar-item path='/home'>
        <img slot="icon" src="~assets/images/tabbar/home.svg" alt="">
        <img slot="icon-active" src="~assets/images/tabbar/home_active.svg" alt="">
        <div slot="text">首页</div>
      </tab-bar-item>

        <tab-bar-item path='/category'>
        <img slot="icon" src="~assets/images/tabbar/category.svg" alt="">
        <img slot="icon-active" src="~assets/images/tabbar/category_active.svg" alt="">
        <div slot="text">分类</div>
      </tab-bar-item>

       <tab-bar-item path='/cart'>
        <img slot="icon" src="~assets/images/tabbar/shopcart.svg" alt="">
        <img slot="icon-active" src="~assets/images/tabbar/shopcart_active.svg" alt="">
        <div slot="text">购物车</div>
      </tab-bar-item>

        <tab-bar-item path='/user'>
        <img slot="icon" src="~assets/images/tabbar/profile.svg" alt="">
        <img slot="icon-active" src="~assets/images/tabbar/profile_active.svg" alt="">
        <div slot="text">我的</div>
      </tab-bar-item>

    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
