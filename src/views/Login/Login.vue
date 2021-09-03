
<template>
	<v-card width="400" class="mx-auto mt-5">
		<v-card-title>
			<h1 class="display-1">登录</h1>
		</v-card-title>
		<v-card-text>
			<v-form>
<!--                           默认显示-->
				<v-text-field label="账户" prepend-icon="mdi-account-circle" />
                <!--                           mdi-eye-off 隐藏密码-->
				<v-text-field
					:type="showPassword ? 'text' : 'password'"
					label="密码"
					prepend-icon="mdi-lock"
					:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="showPassword = !showPassword"
				/>
                <v-autocomplete
                        label="选择你的用户身份"
                        prepend-icon="mdi-face"
                        :items="identities"

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
                {{register.label}}
            </v-btn>
			<v-spacer></v-spacer>
			<v-btn
                    color="info"
                    :to="MenuLink.url"
            >登录
            </v-btn>
		</v-card-actions>
	</v-card>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>

//    动作绑定
export default {
	name: 'LoginPage',
	data() {

		return ({
            studentid:{},
            identities: ['学生', '教师', '管理用户'],
            register:{
                //  label
                label: '注册',
                //  vue link
                url: '/signup'
            },
            MenuLink:{
                //  label
                label: '主菜单',
                //  vue link
                url: '/Menu/Layout'
            },
			showPassword: false
		})

	},
    methods:{
        // getJoke:function() {
        //     var that=this;
        //     axios.get("http://127.0.0.1:8080/student/all").then(
        //
        //         function(response){
        //             that.studentid = response.data;
        //             that.classid = response.data;
        //
        //             console.log(response);
        //         },function(err){}
        //     )
        // },
        // posJoke:function() {
        //     var that=this;
        //     axios.post("https://autumnfish.cn/api/user/reg",{studentid:that.studentid})
        //         .then(function(response){
        //             console.log(response);
        //         },function(err){
        //             console.log(err);
        //         })
        // }
    }
}
</script>

<style></style>
