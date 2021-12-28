<template>
    <div class='container'>
        <h1>{{obj.name}}</h1>
        <el-button @click="classchange">点击改变</el-button>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            obj:{
                name:'名字'
            }
        };
    },
    created(){

    },
     methods:{
         classchange(){
            //  Reflect.deleteProperty(this.obj,'name')  //非响应式的
            this.$delete(this.obj,'name')
             console.log(this.obj)
         }
    },
    computed: {},
}
</script>
<style lang='less' scoped>

</style>