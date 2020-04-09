<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    data() {
        return {
            bscroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    mounted() {
        this.bscroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType: this.probeType,
             pullUpLoad: this.pullUpLoad
        }),
        this.bscroll.on('scroll',(position) => {
            this.$emit('scroll',position)
        }),
        this.bscroll.on('pullingUp',() => {
            this.$emit('pullingUp')
        })
    },
    methods: {
        scrollTo(x,y,time){
            this.bscroll.scrollTo(x,y,time)
        },
    },
}
</script>