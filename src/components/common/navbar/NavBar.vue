<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    name:'NavBar'
}
</script>
// 当style标签具有该scoped属性时，其CSS将仅应用于当前组件的元素
<style scoped>
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 2;
}
.left,.right{
    width: 60px;
}
.center{
    flex: 1;
}
</style>