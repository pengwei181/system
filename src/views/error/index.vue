<template>
  <div class="err-page">
    <div class="err-code">4<span>0</span>4</div>
    <div class="err-desc">啊哦~ 你所访问的资源不存在~</div>
    <div class="err-box">
      <router-link to="/"><el-button type="primary">返回首页</el-button></router-link>
      <el-button type="primary" class="err-btn" @click="goBack">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "error",
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .err-page{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .err-code{
    line-height: 1;
    font-size: 250px;
    font-weight: bolder;
    color: #2d8cf0;
    margin-top: 50px;
  }
  .err-code span{
    color: #00a854;
  }
  .err-desc{
    font-size: 30px;
    color: #777;
  }
  .err-box{
    margin-top: 30px;
    padding-bottom: 200px;
  }
  .err-btn{
    margin-left: 100px;
  }

</style>
