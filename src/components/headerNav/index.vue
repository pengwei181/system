<template>
  <div class="container headerNav">
    <div class="nav-left">
      <!-- 展开关闭左侧菜单 -->
      <div class="drop" @click="dropToggle">
        <i v-if="collapse" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
      </div>
    </div>
    <div class="nav-right">
      <!-- 用户信息下拉选项 -->
      <el-dropdown class="dropdowns" trigger="click" @command="handleCommand">
        <div class="dropdown-flex">
          <el-avatar class="img" :size="30" src="">
            <img src="@/assets/img/user.png"/>
          </el-avatar>
          <span class="el-dropdown-link" title="陈鱼">
            陈鱼<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">基本信息</el-dropdown-item>
          <el-dropdown-item command="2">修改密码</el-dropdown-item>
          <el-dropdown-item command="3" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      

    </div>
  </div>
</template>

<script>
export default {
  name: 'headerNav',
  data() {
    return {
      collapse: "true", // 展开关闭

    }
  },
  components: {

  },
  mounted() {

  },
  methods: {
    // 展开关闭
    dropToggle() {
      this.collapse = !this.collapse;
    },
    // 用户信息下拉
    handleCommand(command) {
      console.log('click on item ' + command);
    }

  }
}
</script>
<style lang="scss" scoped>
.headerNav {
  height: 50px;
  line-height: 50px;
  background: #007aff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  padding-left: 0;
  box-sizing: border-box;
  color: #ffffff;
  .nav-left {
    display: flex;
    align-items: center;
    .drop {
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      text-align: center;
      cursor: pointer;
    }

  }
  .nav-right {
    .dropdowns {
      height: 50px;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #ffffff;
      .dropdown-flex {
        display: flex;
        align-items: center;
        outline: none;
        .img {
          margin-right: 10px;
        }
      }
      
    }
    
  }
}
</style>
