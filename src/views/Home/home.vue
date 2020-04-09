<template id='home'>
    <div>
       <nav-bar class="home-nav">
           <div slot="center">购物车</div>
       </nav-bar> 
       <scroll class="content"
       ref="scroll"
       :probe-type='3'
       @scroll="isShowBackTop" 
       :pull-up-load='true' 
       @pullingUp='loadMore'>
            <home-swiper :cbanners='banners'></home-swiper>
            <home-recommends :crecommends='recommends'/>
            <home-feature/>
            <tab-control :titles="title" class="tab-control" @tabClick='tabClick'></tab-control>
            <goods-list :goods="showGoods"/>
       </scroll>
       <back-top  @click.native="backToTop" v-show="isShow"></back-top>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childrenCom/homeSwiper'
import HomeRecommends from './childrenCom/homerecommends'
import HomeFeature from './childrenCom/homefeature'


import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getMultiData} from 'network/home'
import {getMultiGoods} from 'network/home'
export default {
    name:'Home',
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommends,
        HomeFeature,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    data() {
        return {
            banners: [],
            recommends:[],
            title:['流行','新款','精选'],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},
            },
            currentType:'pop',
            isShow:false
        }
    },
    computed: {
        showGoods(){
           return this.goods[this.currentType].list;
        }
    },
    created() {
        this.getMultiData();
        // 把goods上的所有数据请求过来
        this.getMultiGoods('pop');
        this.getMultiGoods('new');
        this.getMultiGoods('sell');
      
    },
    methods: {
        /**事件监听 */
        tabClick(index){
            switch (index) {
                case 0:
                    this.currentType = 'pop'
                    break
                 case 1:
                    this.currentType = 'new'
                    break
                 case 2:
                    this.currentType = 'sell'
                    break
            }
        },
        backToTop(){
            // 拿到scroll组件，再调用其方法scrollTo
            this.$refs.scroll.scrollTo(0,0,300)
        },
        isShowBackTop(position){
            // 当下拉1000px时，显示BackTop
            this.isShow = (-position.y) > 1000
        },
        loadMore(){
            this.getMultiGoods(this.currentType),//一定要用this，才是调用的本地的methods方法
            console.log("加载下一页");
            
        },


        /*网络请求*/
        getMultiData(){
            getMultiData()
            .then(res => {
                console.log(res);
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
            //    console.log(res.data.data.banner.list);
            })
            },
        getMultiGoods(type){
            const page = this.goods[type].page +1;
           getMultiGoods(type,page).then(res => {
               this.goods[type].list.push(...res.data.list);//把数据保存，新语法知识
               this.goods[type].page += 1;
            this.$refs.scroll.bscroll.finishPullUp()
               console.log(page);
        })
        }
    },
}
</script>

<style scoped>
#home{
    padding-top: 44px;
    position: relative;
}
.home-nav{
    background:  #ff8198;
    text-align: center;
    color: white;
    font-size: 20px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
}
.tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
}
.content{
    position: absolute;
    bottom: 49px;
    top: 44px;
    left: 0;
    right: 0;
}
</style>