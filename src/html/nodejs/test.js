const fs = require('fs')

let str = `<div class="container">
<el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="province" label="省份" width="120"></el-table-column>
    <el-table-column prop="city" label="市区" width="120"></el-table-column>
    <el-table-column prop="address" label="地址" width="300"></el-table-column>
    <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
    <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
        </template>
    </el-table-column>
</el-table>

<my-table :tableData="tableData" :columnName="columnName"></my-table>
</div>`

fs.readdir('../',(err, files) => {
    if (err) {
        return console.log(err);
    }

    console.log(files);
})