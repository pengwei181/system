<template>
  <div class="container menuList">
    <div class="logo">康田物业管理系统</div>
    <div class="menu-box">
      <div class="margin-menu">
        <el-menu
          default-active="2-2"
          :collapse="collapse"
          class="el-menu-vertical-demo"
          background-color="#ffffff"
          text-color="#303133"
          active-text-color="#409EFF"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>物业管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              <span slot="title">员工管理</span>
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-menu"></i>
              <span slot="title">部门管理</span>
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-menu"></i>
              <span slot="title">权限管理</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>业主管理</span>
            </template>
            <el-submenu index="2-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>这是菜单</span>
              </template>
              <el-menu-item index="2-1-1">
                <i class="el-icon-menu"></i>
                <span slot="title">菜单1</span>
              </el-menu-item>
              <el-menu-item index="2-1-2">
                <i class="el-icon-menu"></i>
                <span slot="title">菜单2</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2-2">
              <i class="el-icon-setting"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">操作日志</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuList',
  data() {
    return {
      collapse: false,
    }
  },
  components: {

  },
  mounted() {

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }

  }
}
</script>
<style lang="scss" scoped>
.menuList {
  background: #ffffff;
  .logo {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    background: #007aff;
    color: #ffffff;
  }
  .el-menu-vertical-demo {
    border-right: none;
  }
  .menu-box {
    height: calc(100% - 50px);
    overflow: hidden;
    border-right: 1px solid #e6e6e6;
    box-sizing: border-box;
    .margin-menu {
      height: 100%;
      overflow-y: scroll;
      margin-right: -17px;
    }
  }
    
}
</style>
