<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if='!isActive' name="icon"></slot>
        <slot v-else name="icon-active"></slot>
        <div :style="colorStyle"><slot name="text"></slot></div>
    </div>
</template>
<script>
export default {
    name:'TabBarItem',
    props:{
        path:{
            type:String
        },
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data() {
        return {}
    },
    methods: {
        itemClick(){
            if (!this.isActive) {
            this.$router.push(this.path)
            }
        }
        
    },
    computed: {
        isActive(){
            return this.$route.path == this.path
        },
        colorStyle(){
            return this.isActive ? {color:this.activeColor}:{}
        }
    },

}
</script>

<style scoped>
 .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    color:black;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 4px 0 2px 0;
  }


</style>