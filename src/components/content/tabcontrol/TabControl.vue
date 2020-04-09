<template>
    <div class="tab-control" >
      <div v-for="(item,index) in titles" :key="index" 
      class='control-item' @click="itemClick(index)" 
      :class="{active:index==currentIndex}">
        <span>{{item}}</span>  
      </div>  
    </div>
</template>
<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            currentIndex:0
        }
    },
    methods: {
       itemClick(index){
           this.currentIndex=index;
           this.$emit('tabClick', index)
       } 
    },
}
</script>

<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 13px;
    line-height: 44px;
    height: 44px;
    background:white ;
}
.tab-control span{
    padding: 5px;
}
.control-item{
    flex: 1;
}
.active span{
    border-bottom: 3px solid #ff8198;
    color: #ff8198;
}

</style>