<template>
  <div class="container login" id="particlesId">
    <div>

    </div>
    <video src="movie.ogg">您的浏览器不支持 video 标签。</video>
    <!-- <div class="login-card animate__animated animate__zoomInDown">
      <div class="login-title">
        <div class="login-tl">登录</div>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="login_form" @submit.native.prevent>
        <el-form-item label="" label-width="0" prop="username">
          <el-input class="lang_input" placeholder="请输入您的账号" prefix-icon="el-icon-user"  clearable v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="" label-width="0" prop="password">
          <el-input class="lang_input" placeholder="请输入您的密码" prefix-icon="el-icon-lock" show-password v-model="ruleForm.password"></el-input>
        </el-form-item>
        <div class="remember_pass">
          <el-checkbox v-model="isRememberPass">记住密码</el-checkbox>
        </div>
        <el-button type="danger" native-type="submit" @click="submitLogin('ruleForm')" class="lang_button">登录</el-button>
      </el-form>
    </div> -->

  </div>
</template>

<script>
import particles from 'particles.js' 
import particlesConfig from '@/utils/particles.json'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import { setCookie, getCookie, delCookie } from '@/utils/cookie'
// import { login } from '@/api/login.js'
export default {
  name: 'login',
  data () {
    return {
      isRememberPass: false, //记住密码
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入您的账号', trigger: 'blur' },
          // { min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created() {

  },
  mounted() {
    particlesJS("particlesId", particlesConfig);
    // if (getCookie("user") && getCookie("pwd")) {
    //   this.ruleForm.username = getCookie("user");
    //   this.ruleForm.password = getCookie("pwd");
    //   this.isRememberPass = true;
    // }
  },
  methods: {
    // 登录
    submitLogin(formName) {
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
          // 登录接口
          login(this.ruleForm).then((res)=>{
            res = res.data
            if (res.code == 1000) {
              this.MS("登录成功！")
              //this.$store.commit("setToken",res.data.access_token)// 放进 返回拦截器里设置token
              this.$store.commit("setUserInfo",JSON.stringify(res.data))
              this.$router.push({ path: '/' });
            } else {
              this.ME(res.msg)
            }
          })
					// this.MS("登录成功！")
					// this.$store.commit("setToken", '123456')
					// this.$router.push({ path: '/' });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
   
  }
}
</script>
<style lang="scss" scoped>
.scoped {

}

.pws-login {
  /**表单样式**/
  .login_form {
    margin-top: 50px;
    .el-form-item {
      margin-bottom: 40px;
      & + .el-form-item {
        margin-bottom: 30px;
      }
      .el-input__inner {
        height: 50px;
        line-height: 50px;
      }
      .el-input__icon {
        line-height: 50px;
        font-size: 18px;
      }
    }
  }
  /**复选框样式**/
  .remember_pass {
    .el-checkbox__input.is-checked+.el-checkbox__label {
      color: #E90043;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: #E90043;
      border-color: #E90043;
    }
    .el-checkbox__inner:hover {
      border-color: #E90043;
    }
    .el-checkbox__input.is-focus .el-checkbox__inner {
      border-color: #DCDFE6;
    }
  }
}
</style>
<style lang="scss" scoped>
.container {
  background: #000000;
  //background-image: url('../../assets/img/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-card {
  width: 550px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 50px;
  box-sizing: border-box;
  position: absolute;
}
.login-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #E90043;
  .login-tl {
    font-size: 30px;
    letter-spacing: 2px;
  }
  .login-tr {
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
      vertical-align: top;
      margin-right: 5px;
    }
  }
}
.lang_button {
  background-color: #E90043;
  width: 100%;
  padding: 17px 20px;
  margin-top: 20px;
  font-size: 18px;
  letter-spacing: 2px;
}
</style>

