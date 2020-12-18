<template>
  <div class="container home">
    <div class="home-menu">
      <!-- 左侧菜单 -->
      <menu-list></menu-list>
    </div>
    <div class="home-main">
      <!-- 页面头部 -->
      <header-nav></header-nav>
      <!-- 主体内容 -->
      <div class="main-body">
        <div class="">
          <div>
            <!-- <keep-alive> -->
              <router-view/>
            <!-- </keep-alive> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuList from "@/components/menuList/index.vue"
import headerNav from "@/components/headerNav/index.vue"
export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    menuList,
    headerNav,
  },
  mounted() {

  },
  methods: {
    

  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  .home-menu {
    flex: none;
    width: 220px;
    height: 100%;
  }
  .home-main {
    flex: auto;
    height: 100%;
    .main-body {
      height: calc(100% -50px);

    }
  }
}
</style>
