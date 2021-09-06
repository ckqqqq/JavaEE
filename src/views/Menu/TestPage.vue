<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>管理员面板</v-card-title>
          <v-card-subtitle style="margin-top: 1vh;">欢迎，管理员{{supervisor}}!</v-card-subtitle>

<!--          管理面板切换-->
          <v-tabs
              fixed-tabs
              background-color="indigo"
              dark
          >
            <v-spacer></v-spacer>
            <v-tab>
              院校信息管理
            </v-tab>
            <v-tab @click="getStudent">
              学生账户管理
            </v-tab>
            <v-tab>
              教师账户管理
            </v-tab>
            <v-tab>
              管理员账户管理
            </v-tab>
          </v-tabs>

          <v-btn class="blue white--text" style="margin-top: 1vh; margin-bottom: 1vh; width: 100%">如果可以做到页面切换，可以考虑上面的切换按钮</v-btn>
        </v-card>


      </v-col>

    </v-row>


<!--    表格部分数据-->
    <v-row>
      <v-col>
        <v-data-table
            :headers="headers"
            :items="stdData"
            sort-by="class"
            class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar
                flat
            >
              <v-toolbar-title>{{choosedTitle}}</v-toolbar-title>
              <v-divider
                  class="mx-4"
                  inset
                  vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <v-dialog
                  v-model="dialog"
                  max-width="500px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      color="success"
                      dark
                      class="mb-2"
                      style="margin-left: 1vh;margin-right: 1vh"
                      @click="getStudent"
                  >刷新</v-btn>
                  <v-btn
                      color="indigo"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                  >
                    新建
                  </v-btn>

                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

<!--                  新增数据的验证逻辑-->
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.studentID"
                              label="学号"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.name"
                              label="姓名"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.classID"
                              label="班号"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.score"
                              label="分数"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              cols="12"
                              sm="6"
                              md="4"
                              v-model="editedItem.passwd"
                              label="密码"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                    >
                      取消
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                    >
                      保存
                    </v-btn>
                  </v-card-actions>
                </v-card>


              </v-dialog>

              <v-dialog v-model="dialogDelete" max-width="20%">
                <v-card>
                  <v-card-title class="text-h3 red--text text-center" style="margin-bottom: 1.5vh">是否删除该学生数据？</v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="deleteItemConfirm">确定</v-btn>
                    <v-btn color="blue darken-1" text @click="closeDelete">取消</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>

          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn
                color="primary"
                @click="initialize"
            >
              Reset
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <!--        -->
    <v-snackbar
        v-model="snack"
        :timeout="3000"
    >

      <template v-slot:action="{ attrs }">
        <v-btn
            v-bind="attrs"
            text
            @click="snack = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!--          -->

  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: 'Contacts',
  data: () => ({

    snack:true,
    //界面数据
    supervisor:'',

    stdGet:'',
    stdUpdate:'',
    stdDelete:'',
    stdRegister:'',

    tab: null,
    items: [
      'web', 'shopping', 'videos', 'images', 'news',],
    text: 'Lorem ipsum dolor sit ',

    tags: [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
    ],

    choosedTitle:'学生信息管理',

    //账号<20 8<=密码<20
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: '学号',
        align: 'start',
        sortable: false,
        value: 'studentID',
      },
      { text: '姓名', value: 'name' },
      { text: '班号', value: 'classID' },
      { text: '分数', value: 'score' },
      { text: '等级', value: 'myrank' },
      { text: '修改', value: 'actions', sortable: false },
    ],
    stdData: [],
    editedIndex: -1,
    editedItem: {
      studentID: '',
      name: '',
      classID: '',
      score: '',
      passwd: '',
      myrank:'',
    },
    defaultItem: {
      studentID: '',
      passwd: '',
      name: '',
      score: '',
      classID: '',
      myrank:'',
    },

    test_url:"",//测试的url
    test_var1:"",//测试的var1
    test_var2:"",//测试的var2

  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '新建' : '编辑'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    TestPos: function () {
      var that = this;
      var url ="http://127.0.0.1:9090/student/all";

      axios({
        url: url,
        method: 'post',
        //这里传入变量
        params: {
          id: that.test_var1,
          password: that.test_var2,
        }
      })
          .then(function (response) {
            alert("欢迎登陆，用户：" + response.data.d);
            if (response.data.msg === "成功") {
              that.resp = response;
              that.isLogin = true;
              alert("欢迎登陆，用户：" + that.resp.data.data['name']);
              //存储当前用户的登录状态
              //触发提示：后期可以删除
              alert("欢迎登陆，用户：" + that.resp.data.data['name']);
              //跳转到指定页面
              that.$router.push('/');
            } else {
              alert("您的用户名或密码输入错误，请检查。");
            }
          })
    },

    // 学生信息管理
    //获取信息
    getStudent(){
      var that = this;
      var url ="http://127.0.0.1:9090/student/all";

      axios({
        url: url,
        method: 'get',
      })
          .then(function (response) {
            Object.assign(that.stdData, response.data.data);
            that.stdData.push();
          })
    },
    //更新信息
    updateStudent(){
      var that = this;
      var url ="http://127.0.0.1:9090/student/update";

      axios({
        url: url,
        method: 'post',
        params:{
          id:that.editedItem.studentID,
          name:that.editedItem.name,
          passwd:that.editedItem.passwd,
          classID:that.editedItem.classID,
          score:that.editedItem.score,
          rank:that.editedItem.myrank,
        }
      })
          .then(function (response) {
            alert("更新信息状态" + response.data.msg);
          })

    },
    // 删除学生信息
    deleteStudent(editedindex){
      var that = this;
      var url ="http://127.0.0.1:9090/student/delete";

      axios({
        url: url,
        method: 'post',
        params:{
          id:that.stdData[editedindex]['studentID'],
        }
      })
          .then(function (response) {
            alert("删除操作状态：" + response.data.msg);
          })
    },
    //新增学生信息
    registerStudent(){
      var that = this;
      var url ="http://127.0.0.1:9090/student/insert";

      axios({
        url: url,
        method: 'post',
        params:{
          id:that.editedItem.studentID,
          name:that.editedItem.name,
          passwd:that.editedItem.passwd,
          classID:that.editedItem.classID,
          score:that.editedItem.score,
        }
      })
          .then(function (response) {
            alert("注册操作状态：" + response.data.msg);
          })
    },


    initialize () {
      this.stdData = [
        {
          studentID: '2019223948',
          passwd: 159,
          name: 6.0,
          score: 24,
          classID: 4.0,
          myrank:'22',
        },
        {
          studentID: '201913048',
          passwd: 237,
          name: 9.0,
          score: 37,
          classID: 4.3,
          myrank:'22',
        },
        {
          studentID: '20383801',
          passwd: 262,
          name: 16.0,
          score: 23,
          classID: 6.0,
          myrank:'22',
        },]
    },

    editItem (item) {
      this.editedIndex = this.stdData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.stdData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.deleteStudent(this.editedIndex);
      this.stdData.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.stdData[this.editedIndex], this.editedItem);
      } else {
        this.stdData.push(this.editedItem)
      }
      if (this.editedIndex === -1) {
        this.registerStudent(this.editedIndex);
      }else{
        this.updateStudent(this.editedIndex);
      }
      this.close()
    },
  },
}
</script>

