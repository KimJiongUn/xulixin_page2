<template>
    <div class="container">
        <el-table :data="tableData" border style="width: 100%">
           <el-table-column v-for="(item,index) in columnName" :key="item" fixed :prop="tableProp[index]" :label="item" width="150">
           </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            tableProp:[]
        };
    },
    props:{
        tableData:{
            type:Array,
            default:[]
        },
        columnName:{
            type:Array,
            default:[]
        }
    },
    created() {
        this.tableProp = Object.keys(this.tableData[0])
        console.log(this.tableData,this.columnName,this.tableProp)
    },
    methods: {

    },
    computed: {},
}
</script>
<style lang='less' scoped>
</style>