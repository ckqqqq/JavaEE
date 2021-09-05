<template>
        <v-list three-line>
            <template v-for="(item, index) in items">
                <v-subheader
                        v-if="item.header"
                        :key="item.header"
                        v-text="item.header"
                >你好无啊</v-subheader>

                <v-divider
                        v-else-if="item.divider"
                        :key="index"
                        :inset="item.inset"
                ></v-divider>

                <v-list-item
                        v-else
                        :key="item.title"
                >
                    <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-col>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                        </v-col>
                        <v-col>
                            <v-btn link color="green" @click="ExternalLink(item.link)">官网</v-btn>
                        </v-col>
                        <v-col>
                            <v-btn link color="blue " @click="ExternalLink(item.link)">优势专业一</v-btn>
                        </v-col>
                        <v-col>
                            <v-btn link color="yellow " @click="ExternalLink(item.link)">优势专业二</v-btn>
                        </v-col>
                        <v-col>
                            <v-btn link color="yellow " @click="ExternalLink(item.link)">优势专业二</v-btn>
                        </v-col>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
</template>
<script>
    export default {
        data: () => ({
            items: [
                { header: '高校信息 杨兄负责调整配色和连接' },
                //注意这里是
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: '<span class="heading text--lighten-1 font-weigh">天津人大学</span>',
                    subtitle: `
                       <span class="card-panel text--lighten-1 font-weigh">天津人大学</span>
                    &mdash; 上面是不同字体`,
                    link:'http://www.tju.edu.cn/',
                //    vuetify.min.css
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: '<span class=" red--text font-weight-bold text--lighten-1 font-weigh">北京理工大学</span><span class="grey--text text--lighten-1">4</span>',
                    subtitle: `<span class="text--primary">双一流A类</span> &mdash; 连接.`,
                    link:'http://www.bupt.edu.cn/'
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: '<span class="headline red--text font-weight-bold text--lighten-1 font-weigh">北京美容美发大学</span>',
                    subtitle: ' &mdash;  连接?',
                    link:'http://www.bupt.edu.cn/'
                },

            ],
        }),
        methods :{
            ExternalLink(link){
                window.location.href = link;
            }
        }
    }
</script>
<!--<template>-->
<!--    <v-container>-->
<!--        <v-layout text-center wrap>-->
<!--            <v-flex xs12>-->
<!--                <v-img-->
<!--                        :src="require('../../assets/logo.svg')"-->
<!--                        class="my-3"-->
<!--                        contain-->
<!--                        height="200"-->
<!--                ></v-img>-->
<!--            </v-flex>-->

<!--            <v-flex mb-4>-->
<!--                <h1 class="display-2 font-weight-bold mb-3">-->
<!--                    Welcome to Vuetify-->
<!--                </h1>-->
<!--                <p class="subheading font-weight-regular">-->
<!--                    For help and collaboration with other Vuetify developers,-->
<!--                    <br />please join our online-->

<!--                </p>-->
<!--            </v-flex>-->

<!--            <v-flex mb-5 xs12>-->
<!--                <h2 class="headline font-weight-bold mb-3">What's next?</h2>-->

<!--                <v-layout justify-center>-->
<!--                    <a-->
<!--                            v-for="(next, i) in whatsNext"-->
<!--                            :key="i"-->
<!--                            :href="next.href"-->
<!--                            class="subheading mx-3"-->
<!--                            target="_blank"-->
<!--                    >-->
<!--                        {{ next.text }}-->
<!--                    </a>-->
<!--                </v-layout>-->
<!--            </v-flex>-->

<!--            <v-flex xs12 mb-5>-->
<!--                <h2 class="headline font-weight-bold mb-3">Important Links</h2>-->

<!--                <v-layout justify-center>-->
<!--                    <a-->
<!--                            v-for="(link, i) in importantLinks"-->
<!--                            :key="i"-->
<!--                            :href="link.href"-->
<!--                            class="subheading mx-3"-->
<!--                            target="_blank"-->
<!--                    >-->
<!--                        {{ link.text }}-->
<!--                    </a>-->
<!--                </v-layout>-->
<!--            </v-flex>-->

<!--            <v-flex xs12 mb-5>-->
<!--                <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>-->

<!--                <v-layout justify-center>-->
<!--                    <a-->
<!--                            v-for="(eco, i) in ecosystem"-->
<!--                            :key="i"-->
<!--                            :href="eco.href"-->
<!--                            class="subheading mx-3"-->
<!--                            target="_blank"-->
<!--                    >-->
<!--                        {{ eco.text }}-->
<!--                    </a>-->
<!--                </v-layout>-->
<!--            </v-flex>-->
<!--        </v-layout>-->
<!--    </v-container>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        data: () => ({-->
<!--            ecosystem: [-->
<!--                {-->
<!--                    text: 'vuetify-loader',-->
<!--                    href: 'https://github.com/vuetifyjs/vuetify-loader'-->
<!--                },-->
<!--                {-->
<!--                    text: 'github',-->
<!--                    href: 'https://github.com/vuetifyjs/vuetify'-->
<!--                },-->
<!--                {-->
<!--                    text: 'awesome-vuetify',-->
<!--                    href: 'https://github.com/vuetifyjs/awesome-vuetify'-->
<!--                }-->
<!--            ],-->
<!--            importantLinks: [-->
<!--                {-->
<!--                    text: 'Documentation',-->
<!--                    href: 'https://vuetifyjs.com'-->
<!--                },-->
<!--                {-->
<!--                    text: 'Chat',-->
<!--                    href: 'https://community.vuetifyjs.com'-->
<!--                },-->
<!--                {-->
<!--                    text: 'Made with Vuetify',-->
<!--                    href: 'https://madewithvuejs.com/vuetify'-->
<!--                },-->
<!--                {-->
<!--                    text: 'Twitter',-->
<!--                    href: 'https://twitter.com/vuetifyjs'-->
<!--                },-->
<!--                {-->
<!--                    text: 'Articles',-->
<!--                    href: 'https://medium.com/vuetify'-->
<!--                }-->
<!--            ],-->
<!--            whatsNext: [-->
<!--                {-->
<!--                    text: 'Explore components',-->
<!--                    href: 'https://vuetifyjs.com/components/api-explorer'-->
<!--                },-->
<!--                {-->
<!--                    text: 'Select a layout',-->
<!--                    href: 'https://vuetifyjs.com/layout/pre-defined'-->
<!--                },-->
<!--                {-->
<!--                    text: 'Frequently Asked Questions',-->
<!--                    href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'-->
<!--                }-->
<!--            ]-->
<!--        })-->
<!--    }-->
<!--</script>-->
