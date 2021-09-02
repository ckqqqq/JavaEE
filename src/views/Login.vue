
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
			<v-btn color="info">登录</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
//    动作绑定
export default {
	name: 'LoginPage',
	data() {
		return {
            register:{
                //  label
                label: '注册',
                //  vue link
                url: '/signup'
            },
			showPassword: false
		}
	}
}
</script>

<style></style>
