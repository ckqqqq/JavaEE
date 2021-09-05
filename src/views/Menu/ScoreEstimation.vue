<template>
    <div class="about">
        <h1>This is an ScoreEstimate page 23333</h1>
        <h1>估分</h1>
        <v-container class="grey lighten-5">
            <v-row no-gutters>
                <template v-for="n in 4">
                    <v-col :key="n">
                        <v-card
                                class="pa-2"
                                
                                tile
                        >
                            <v-card  class="text-xs-center ma-3"
                                     color="green "
                            >
                                <v-card-title>语文</v-card-title>
                                <!--                <v-card-title>标题</v-card-title>-->
                                <v-card-text>
                                    <div class="subheading">点击查看答案</div>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn  color="green ">
                                        <v-icon small left>message</v-icon>
                                        <span>查看答案</span>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-card>
                    </v-col>
                    <v-responsive
                            v-if="n === 2"
                            :key="`width-${n}`"
                            width="100%"
                    ></v-responsive>
                </template>
            </v-row>
        </v-container>
        <v-container>
                <v-row>
                <v-btn block class="primary">第一个按钮</v-btn>
               <v-card  class="text-xs-center ma-3"
                     color="green "
               >
                <v-card-title>语文</v-card-title>
<!--                <v-card-title>标题</v-card-title>-->
                <v-card-text>
                    <div class="subheading">点击查看答案</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn  color="green ">
                        <v-icon small left>message</v-icon>
                        <span>查看答案</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
                </v-row>
            <v-card  class="text-xs-center ma-3">
                <v-card-title>标题</v-card-title>
                <v-card-text>
                    <div class="subheading">Mike</div>
                    <div class="grey--text">前端工程师</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn  color="grey">
                        <v-icon small left>message</v-icon>
                        <span>发送消息</span>
                    </v-btn>
                </v-card-actions>

            </v-card>
        </v-container>

    </div>
</template>