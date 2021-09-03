<template>
  <v-app>
    <v-app-bar app color="primary" dark
               scroll-target="#scrolling-techniques-4"
    >
<!--        Vuetify Dashboard    -->
        <!--      framework in top 23333->top dashboard   -->

      <v-toolbar-title>高考志愿填报智能模拟系统</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
<!--          DashBoard Theme-->
      </v-btn>
<!--    attention key word ！    -->
      <v-btn @click="toggleTheme" text rounded>
        主题
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
<!--      framework in bottom 23333->bottom dashboard   -->
<!--      links:all website links -->
<!--      美元x相当于变量-->
    <v-footer color="primary"
              dark
              padless>
      <v-layout justify-center wrap>
<!--        <v-btn-->

<!--          v-for="link in links"-->
<!--          :key="`${link.label}-footer-link`"-->
<!--          color="white"-->
<!--          text-->
<!--          rounded-->
<!--          class="my-2"-->
<!--          :to="link.url"-->
<!--        >-->
<!--          {{ link.label }}-->
<!--        </v-btn>-->
<!--&lt;!&ndash;          test  &ndash;&gt;-->
<!--          <v-btn-->
<!--                  :key="`${test.label}-footer-link`"-->
<!--                  color="white"-->
<!--                  text-->
<!--                  rounded-->
<!--                  class="my-2"-->
<!--                  :to="test.url"-->
<!--          >-->
<!--              {{test.label}}-->
<!--          </v-btn>-->
        <v-flex primary
                py-4
                text-center
                white--text
                xs12>
          {{ new Date().getFullYear() }} — <strong>软工第十小组-小学期JavaEE实战</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      links: [
        {
          //  label
          label: '登录',
          //  vue link
          url: '/'
        },
        {
          label: '注册',
          url: '/signup'
        },
      ],
        test:{
            //  label
            label: '测试按钮',
            //  vue link
            url: '/about'
        }
    }
  },
  //
  methods: {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = '#41B883'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
