<!--login page -->
<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>注册</h1>
                <!--          https://vuetifyjs.com/en/components/forms/  Forms: a TextBox definer -->
                <v-form ref="signUpForm" v-model="formValidity">

                    <!--            browser -->
                    <v-text-field
                            label="账户"
                            prepend-icon="mdi-account-circle"
                            :rules="AccountRules"
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

                    ></v-autocomplete>

                    <v-text-field
                            label="Email"
                            prepend-icon="mdi-email"
                            type="email"
                            v-model="email"
                            :rules="emailRules"
                            required
                    ></v-text-field>
                    <!--        这个是啥？这个是分割线 -->
                    <v-divider></v-divider>
                    <v-text-field
                            label="学校"
                            prepend-icon="mdi-school"
                    ></v-text-field>
                    <v-text-field
                            label="班级"
                            prepend-icon="mdi-map"
                    ></v-text-field>
                    <v-text-field
                            label="省份"
                            prepend-icon="mdi-school"
                    ></v-text-field>
                    <v-checkbox
                            label="同意协议"
                            v-model="agreeToTerms"
                            :rules="agreeToTermsRules"
                            required
                    ></v-checkbox>
                    <v-btn
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
    export default {
        name: "SignupPage",
        // data() {
        //     return ({
        //
        //         password: "",
        //         confirmPassword: "",
        //         showPassword: false
        //     })
        // },lkdsajlkjdsaflkjdsaklfjdaslkfjlsadfjlk
        data() { return (
            {
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
                password: "",
                confirmPassword: "",
                //史无前例的大bug！！！！！
                //如果你定义了rules却不会使用它，就会出现value is not define
                // PasswordRules: [
                //     value =>
                //         !!value ||
                //         '您需要输入密码',
                //     value.length < 8 ||
                //     '密码需要大于8位'
                // ],
                // confirmPasswordRules: [v => !!v || "密码不一致"],
                passwordRules: [v => !!v || "请输入密码"],
                confirmPasswordRules: [v => !!v || "请输入验证密码"],

                identities: ['学生', '教师', '管理用户'],
                identityRules: [
                    value =>
                        !!value ||
                        '您需要阅读选择你的身份'
                ],
                email: '',

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
            }
        },

    }

</script>
