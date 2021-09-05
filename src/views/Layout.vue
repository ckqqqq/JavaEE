<template>
    <v-app id="inspire">

<!--侧边栏        <>-->
<!--下面的参数总是有问题！！！！！！！！！！-->
        <v-navigation-drawer
                v-model="drawer"
                :clipped="$vuetify.breakpoint.lgAndUp"

                app
        >
<!--            颜色               -->
            <v-sheet
                    color="grey lighten-4"
                    class="pa-4"
            >
<!--                head portrait      -->
<!--&lt;!&ndash;                自带省略号  -->
<!--../../../asset/head.jpg&ndash;&gt;-->
                <v-list>
                    <v-list-item class="px-2">
                        <v-list-item-avatar>
                            <v-img src="./head.jpg"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item
                            link
                            :to="account_link.path"
                    >
                        <v-list-item-content>
                            <v-list-item-title class="text-h6">
                                杨正球
                            </v-list-item-title>
                            <v-list-item-subtitle>ckqqqq@bupt.edu.cn</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-sheet>

            <v-divider></v-divider>

            <v-list
                nav

            >
                <v-list-item
                        link
                        v-for="menu_link in menu_links"
                        :key="menu_link.icon"
                        :to="menu_link.path"
                >
                    <v-list-item-icon>
                        <v-icon>{{ menu_link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ menu_link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <!--        只有 div 才会显示# -->
        <!--        <div class="ao">-->
        <!--            <v-test></v-test>-->
        <!--        </div>-->
        <!--        只有 div 才会显示# -->
        <!--            <test/>-->
        <!--        <div class="about">-->
        <!--            <h1>This is an layout page 23333</h1>-->
        <!--        </div>-->
            <v-container fluid>
                <router-view/>
            </v-container>
        <!--        <div>-->
        <!--            <router-view></router-view>-->
        <!--        </div>-->
    </v-app>
</template>

<script>
    import $session from '@/service/sessionService'
    // import ScoreEstimation from '@/views/Menu/ScoreEstimation'
    // import  test from '@/components/test'
    export default {

        // components:{
        //     "v-test":test
        // },
        data() { return (
            {
            cards: ['Today', 'Yesterday'],
            drawer: null,
            account_link:{path:'/AccountInformation'},
            menu_links: [
                {icon:'mdi-inbox-arrow-down', text:'分数查询',path:'/'},
                {icon:'mdi-face', text:'志愿预测',path:'/SchoolPrediction'},
                {icon:'mdi-school', text:'提前估分',path:'/ScoreEstimation'},
                {icon:'mdi-library', text:'学校信息',path:'/SchoolInformation'},
                {icon:'mdi-all-inclusive',text: '更多',path:'/DatabaseManagement'},
            ],
        })
        },
        created() {
            // 防止直接登录
            if (!$session.getCurrentUser()) this.$router.push('/login', () => {});
        },
        clickMenu(link) {
            if (link.title == 'Profile') {
                alert('profile');
            } else if (link.title == 'Logout') {
                //$ 变量 属性 方法
                $session.clear();
                this.$router.replace('/login');
            }
        }
    }

</script>


