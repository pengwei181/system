<template>
  <div class="container login">
    <video class="video" autoplay="autoplay" loop="loop" muted>
      <source src="@/assets/video/vb1-3.mp4" type="video/mp4"/>
      您的浏览器不支持 video 标签。
    </video>
    <div class="particlesId" id="particlesId"></div>

    <div class="card animate__animated animate__zoomInDown">
      <div class="head">
        <div class="title">登录</div>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="login_form" @submit.native.prevent>
        <el-form-item label="" label-width="0" prop="username">
          <el-input class="lang_input" placeholder="请输入您的账号" prefix-icon="el-icon-user" maxlength="20" clearable v-model.trim="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="" label-width="0" prop="password">
          <el-input class="lang_input" placeholder="请输入您的密码" prefix-icon="el-icon-lock" maxlength="18" show-password v-model.trim="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="" label-width="0" size="mini">
          <el-checkbox label="记住账号密码" name="type" v-model="isRememberPass"></el-checkbox>
        </el-form-item>
        <el-form-item label="" label-width="0" size="large">
          <el-button type="primary" native-type="submit" @click="submitLogin('ruleForm')" class="lang_button" :loading="loginState">{{ loginState ? "登录中" : "登录" }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import particles from 'particles.js' 
import particlesConfig from '@/utils/particles.json'
import { setCookie, getCookie, delCookie } from '@/utils/storage'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      loginState: false, // 登录中按钮状态
      isRememberPass: false, //记住密码
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入您的账号', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    // vuex的map的2种用法，原理都是vuex的属性映射到当前定义的属性
    // ...mapState({
    //   token: state => state.token
    // }),
    // ...mapState(['token']),
  },
  created() {

  },
  mounted() {
    // 初始化粒子canvas效果
    particlesJS("particlesId", particlesConfig);
    // 初始化时读取账号密码
    if (getCookie("user") && getCookie("pwd")) {
      this.ruleForm.username = getCookie("user");
      this.ruleForm.password = getCookie("pwd");
      this.isRememberPass = true;
    }
  },
  methods: {
    // 登录事件
    submitLogin(formName) {
      // 是否勾选记住账号
      if (this.isRememberPass) {
        setCookie("user", this.ruleForm.username, 3600*24*365);
        setCookie("pwd", this.ruleForm.password, 3600*24*365);
      } else {
        if (getCookie("user") && getCookie("pwd")) {
          delCookie("user");
          delCookie("pwd");
        }
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loginState = true;
          console.log('susses submit!!');
          // 模拟登录接口
          setTimeout(() => {
            this.loginState = false;
            this.MS("登录成功！");
            this.$store.commit("setToken", '123456');
            this.$router.push({ path: '/' });
          },2000)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 登录接口(未接)
    loginFunc() {
      login(this.ruleForm).then((res)=>{
        res = res.data
        if (res.code == 1000) {
          this.loginState = false;
          this.MS("登录成功！");
					this.$store.commit("setToken", '123456');
          //this.$store.commit("setToken",res.data.access_token)// 放进 返回拦截器里设置token
          //this.$store.commit("setUserInfo",JSON.stringify(res.data))
          this.$router.push({ path: '/' });
        } else {
          this.ME(res.msg)
        }
      })
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
   
  }
}
</script>
<style lang="scss" scoped>
.login {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  .video {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    object-fit: cover;
  }
  .particlesId {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    top: 0;
    left: 0;
  }
  .card {
    width: 500px;
    height: auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 30px 40px 30px 40px;
    box-sizing: border-box;
    position: absolute;
    z-index: 3;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #007aff;
      .title {
        font-size: 30px;
        letter-spacing: 2px;
      }
    }
    .login_form {
      margin-top: 30px;
      .lang_button {
        width: 100%;
        font-size: 18px;
        letter-spacing: 2px;
      }
    }
  }
}
</style>

