<template>
  <div class="container" :style="{ backgroundColor: style.bgColor }">
    <div class="title">boxModel</div>
    <div class="box_desc">
      <div class="box_left">
        <i :class="['select',item==activeIndex&&'active']" v-for="item in 4" :key="item" @click="selectChange(item)"></i>
        <div class="centerBox" :style="centerBoxStyle"></div>
      </div>
      <div class="box_right" :style="{boxShadow:centerBoxStyle.boxShadow}">
          <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="size">
                <el-slider v-model="form.size" :min="10" :max="400" @input="sizeChange($event)"></el-slider>
            </el-form-item>
             <el-form-item label="radiu">
                <el-slider v-model="form.radius" :max="radiusMax" @input="radiusChange($event)"></el-slider>
            </el-form-item>
          </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      style: {
        bgColor: "#b78a8a",
      },
      form:{
          size:200,
          radius:100
      },
      centerBoxStyle:{
          width:'200px',
          height:'200px',
          backgroundColor:'#b78a8a',
          borderRadius:'100px',
          boxShadow:'20px 20px 40px #6c5151,-20px -20px 40px #ffc3c3'
      },
      activeIndex:1
    };
  },
  created() {
    
  },
  methods: {
      selectChange(index){
          this.activeIndex = index
      },
      sizeChange(value){
          console.log('value',value)
          this.centerBoxStyle.width = value + 'px'
          this.centerBoxStyle.height = value + 'px'
      },
      radiusChange(value){
        this.centerBoxStyle.borderRadius = value + 'px'
      },
      refresh(){
        // location.reload()
        console.log(window.location.href)
      }
  },
  computed: {
    radiusMax(){
      return Math.ceil(this.form.size/2)
    }
  },
};
</script>
<style lang='less' scoped>
@mainColor:#001f3f;
.container {
  width: 100%;
  height: 937px;
  overflow: auto;
  .title {
    font-size: 38px;
    color: #001f3f;
    height: 79px;
    text-align: center;
    margin: 40px 0 70px;
    font-weight: 700;
  }
  .box_desc {
    display: flex;
    justify-content: center;
  }
  .box_left {
    width: 600px;
    height: 600px;
    box-sizing: border-box;
    margin-right: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .select{
        position: absolute;
        display: inline-block;
        width: 26px;
        height: 26px;
        border: 2px solid #001f3f;
        cursor: pointer;
    }
    .select:nth-child(1){
        top: 0;
        left: 0;
        border-bottom-right-radius: 26px;
    }
    .select:nth-child(2){
        top: 0;
        right: 0;
        border-bottom-left-radius: 26px;
    }
    .select:nth-child(3){
        bottom: 0;
        right: 0;
        border-top-left-radius: 26px;
    }
    .select:nth-child(4){
        bottom: 0;
        left: 0;
        border-top-right-radius: 26px;
    }
    .active{
        background-color: yellow;
    }
  }
  .box_right {
    width: 560px;
    height: 526px;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 20px 20px 0 0 ;
    /deep/.el-form-item__label{
      font-size: 16px;
      color: @mainColor;
      font-weight: 700;
    }
  }
}
</style>