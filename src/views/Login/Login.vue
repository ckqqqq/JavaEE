<template>
  <div>
    <v-carousel v-model="model" height="90vh">
      <v-carousel-item
          v-for="(color, i) in colors"
          :key="color"
      >
        <v-sheet
            :color="color"
            height="100%"
            tile
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-card width="400" class="mx-auto mt-5" style="float:right; right: 15vh; bottom: 70vh">
      <v-card-title>
        <h1 class="display-1">登录</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <!--                           默认显示-->
          <v-text-field label="账户" v-model="account" prepend-icon="mdi-account-circle"/>
          <!--                           mdi-eye-off 隐藏密码-->
          <v-text-field
              :type="showPassword ? 'text' : 'password'"
              v-model="pswd"
              label="密码"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
          />
          <v-autocomplete
              label="选择你的用户身份"
              prepend-icon="mdi-face"
              :items="identities"
              v-model="identity"
          ></v-autocomplete>
        </v-form>
      </v-card-text>
      <!--        这个是啥？这个是分割线 -->
      <v-divider></v-divider>

      <v-card-actions>
        <!--			<v-btn color="success">注册</v-btn>-->
        <!--空间-->
        <!--          test  -->
        <v-btn
            color="success"
            :to="register.url"
        >
          {{ register.label }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="warning" :to='this.MenuLink.url'>直接登录</v-btn>
        <v-btn
            color="info"
            @click="this.postLogin"
        >登录
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>

//    动作绑定
import axios from "axios";

export default {
  name: 'LoginPage',
  data() {
    return ({
      studentid: {},
      identities: ['学生', '教师', '管理用户'],

      //需要传递的数据
      account: '',
      pswd: '',
      identity: '',

      //存储登录状态
      isLogin: false,

      //返回的信息请求
      resp: '',

      register: {
        //  label
        label: '注册',
        //  vue link
        url: '/signup'
      },
      MenuLink: {
        //  label
        label: '主菜单',
        //  vue link
        url: '/Menu/Layout'
      },
      showPassword: false,

      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],

    })
  },
  methods: {
    //进行登录，并且将当前用户名以及登录状态存储在localstorage中
    postLogin: function () {
      var that = this;
      var url = '';

      if (that.identity == '学生') {
        url = 'http://127.0.0.1:9090/student/login';
      } else if (that.identity == '教师') {
        url = 'http://127.0.0.1:9090/teacher/login';
      } else {
        //超级用户，等待后端接口
        url = 'http://127.0.0.1:9090/student/login';
      }
      // axios.post("http://127.0.0.1:9090/student/login",{id:'300',password:'ming'})
      axios({
        url: url,
        method: 'post',
        params: {
          id: that.account,
          password: that.pswd
        }
      })
          .then(function (response) {
            console.log(response.data.data["name"])
            if (response.data.msg === "成功") {
              that.resp = response;
              that.isLogin = true;

              //存储当前用户的登录状态
              localStorage.setItem("userName", that.account);
              localStorage.setItem("IsLogin", that.isLogin);

              //触发提示：后期可以删除
              alert("欢迎登陆，用户：" + that.resp.data.data['name']);
              //跳转到指定页面
              that.$router.push('/Main');
            } else {
              alert("您的用户名或密码输入错误，请检查。");
            }
          })
          .catch(function (err) {
            alert("您的用户名或密码输入错误，请检查。");
          })
    },
    //获取用户数据
    mesget: function () {
      var that = this;
      axios.get("http://127.0.0.1:9090/student/all")
          .then(function (response) {
            that.resp = response.data;
            console.log(that.resp);
          })
    }
  }
}

</script>

<style></style>
