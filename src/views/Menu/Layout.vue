<template>
    <v-app id="layout">
<!--侧边栏        <>-->
<!--下面的参数总是有问题！！！！！！！！！！-->
        <v-navigation-drawer
                v-model="drawer"
                :expand-on-hover="true"
                :absolute="true"
        >
<!--            颜色               -->
            <v-sheet
                    color="grey lighten-4"
                    class="pa-4"
            >
<!--                head portrait      -->
<!--                自带省略号  -->
                <v-list>
<!--                    <v-list-item class="px-2">-->
<!--                        <v-list-item-avatar>-->
<!--                            <v-img src="https://randomuser.me/api/portraits/men/11.jpg"></v-img>-->
<!--                        </v-list-item-avatar>-->
<!--                    </v-list-item>-->
                    <v-btn type="primary" @click="putin">hello!</v-btn>
                    <v-list-item
                            link

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
                        v-for="[icon, text] in links"
                        :key="icon"
                        link
                >
                    <v-list-item-icon>
                        <v-icon>{{ icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
            <v-container
                    class="py-8 px-6"
                    fluid
            >
                <v-row>
                    <v-col
                            v-for="card in cards"
                            :key="card"
                            cols="12"
                    >
                        <v-card>
                            <v-subheader>{{ card }}</v-subheader>

                            <v-list two-line>
                                <template v-for="n in 6">
                                    <v-list-item

                                            :key="n"
                                    >
                                        <v-list-item-avatar color="grey darken-1">
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <v-list-item-title>Message {{ n }}</v-list-item-title>

                                            <v-list-item-subtitle>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>

                                    <v-divider
                                            v-if="n !== 6"
                                            :key="`divider-${n}`"
                                            inset
                                    ></v-divider>
                                </template>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            cards: ['Today', 'Yesterday'],
            drawer: null,
            links: [
                ['mdi-inbox-arrow-down', '分数查询'],
                ['mdi-send', '模拟志愿'],
                ['mdi-delete', '提前估分'],
                ['mdi-alert-octagon', '更多'],
            ],
        }),
    };
    // methods:{
    // }
</script>
