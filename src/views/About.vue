<!--login page -->
<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>管理员注册</h1>
                <!--          https://vuetifyjs.com/en/components/forms/  Forms: a TextBox definer -->
                <v-form ref="signUpForm" v-model="formValidity">

                    <!--            browser -->
                    <v-text-field
                            label="管理员账号"
                            prepend-icon="mdi-account-circle"
                            :rules="AccountRules"
                            v-model="account"
                    />
                    <v-text-field
                            label="姓名"
                            prepend-icon="mdi-account-circle"
                            :rules="AccountRules"
                            v-model="name"
                    />
                    <!--                           mdi-eye-off 隐藏密码-->
                    <!--                    <v-text-field-->
                    <!--                            label="密码"-->
                    <!--                    />-->
                    <v-text-field label="密码"
                                  v-model="password"
                                  :rules="passwordRules"
                                  required
                                  :type="showPassword ? 'text' : 'password'"
                                  prepend-icon="mdi-lock"
                                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                  @click:append="showPassword = !showPassword"
                    ></v-text-field>
                    <!--                    :rules="PasswordRules"-->
                    <v-text-field
                            label="确认密码"
                            v-model="confirmPassword"
                            :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
                            :type="showPassword ? 'text' : 'password'"
                            required
                            prepend-icon="mdi-lock-check"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    ></v-text-field>
                    <!--                    注意如果这里没有结束符号></v-text-field> 两者就起不到联动作用-->
                    <!--                    https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/v-text-field/misc-password.vue-->
                    <v-autocomplete
                            label="选择你的用户身份"
                            prepend-icon="mdi-face"
                            :items="identities"
                            v-model="identity"

                    ></v-autocomplete>

                    <v-text-field
                            label="班级"
                            prepend-icon="mdi-map"
                            v-model="sclass"
                    ></v-text-field>

                    <!--        这个是啥？这个是分割线 -->
                    <v-divider></v-divider>
                    <v-text-field
                            label="学校"
                            prepend-icon="mdi-school"
                            v-model="school"
                    ></v-text-field>
                    <v-text-field
                            label="省份"
                            prepend-icon="mdi-school"
                            v-model="province"
                    ></v-text-field>
                    <v-text-field
                            label="Email"
                            prepend-icon="mdi-email"
                            type="email"
                            v-model="email"
                            :rules="emailRules"
                            required
                    ></v-text-field>
                    <v-checkbox
                            label="同意协议"
                            v-model="agreeToTerms"
                            :rules="agreeToTermsRules"
                            required
                    ></v-checkbox>
                    <v-btn
                            @click="regist"
                            type="submit"
                            color="primary"
                            class="mr-4"
                            :disabled="!formValidity"
                    >
                        提交
                    </v-btn>
                    <!--            validate 的意思是 证实 确认 -->
                    <v-btn color="warning" class="mr-4" @click="validateForm"
                    >格式验证
                    </v-btn
                    >
                    <!--            绑定任务直接是@click  -->
                    <v-btn color="error" @click="resetForm">重置</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from "axios";

    export default {
        name: "SignupPage",
        // data() {
        //     return ({
        //
        //         password: "",
        //         confirmPassword: "",
        //         showPassword: false
        //     })
        // },
        data() {
            return (
                {
                    //注册用户的信息
                    account: '',
                    name: '',
                    password: '',
                    identity: '',
                    email: '',
                    school: '',
                    sclass: '',
                    province: '',

                    resback: '',

                    agreeToTerms: false,
                    agreeToTermsRules: [
                        value =>
                            !!value ||
                            '您需要阅读并同意条款'
                    ],
                    AccountRules: [
                        value =>
                            !!value ||
                            '您需要输入账号'
                    ],
                    confirmPassword: "",
                    passwordRules: [v => !!v || "请输入密码"],
                    confirmPasswordRules: [v => !!v || "请输入验证密码"],

                    identities: ['管理用户'],
                    identityRules: [
                        value =>
                            !!value ||
                            '您需要阅读选择你的身份'
                    ],

                    emailRules: [
                        value => !!value || '您需要输入邮箱',
                        value => value.indexOf('@') !== 0 || 'Email 应该有用户名',
                        value => value.includes('@') || 'Email 应当包含“@”字符',
                        value =>
                            value.indexOf('.') - value.indexOf('@') > 1 ||
                            'Email 格式错误',
                        value => value.includes('.') || 'Email 应包含“.”字符',
                        value =>
                            value.indexOf('.') <= value.length - 3 ||
                            'Email 应当包含有效域名'
                    ],
                    formValidity: false,
                    showPassword: true,
                }
            )
        },
        computed: {
            passwordConfirmationRule() {
                return () =>
                    this.password === this.confirmPassword || "密码不一致";
            }
        },
        methods: {
            //  https://vuetifyjs.com/en/components/forms/#rules
            resetForm() {
                this.$refs.signUpForm.reset()
            },
            validateForm() {
                this.$refs.signUpForm.validate()
            },
            regist: function () {
                 if (this.identity === '管理用户'){
                    axios({
                        url: "http://127.0.0.1:9090/admin/register",
                        method: 'post',
                        params: {
                            id: this.account,
                            name: this.name,
                            passwd: this.password,
                            classid: this.sclass,
                        }
                    })
                        //在 then的内部不能使用Vue的实例化的this, 因为在内部 this 没有被绑定。
                        .then((response) => {
                            // 用ES6箭头函数，箭头方法可以和父方法共享变量
                            // 在请求axios外面定义一下 var that=this
                            this.resback = response;
                            alert("注册成功！欢迎老师" + this.name);
                            localStorage.setItem("userid", this.account);
                            localStorage.setItem("username", this.name);
                            localStorage.setItem("isLogin", 'true');
                        })
                        .catch(function (err) {
                            alert("网络问题，请稍后重试，错误代码：" + err.data.code);
                        })
                }else{
                    alert("请填入正确的身份");
                }

            }
        },

    }

</script>
