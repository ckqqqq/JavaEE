<template>


  <v-list three-line>
    <template v-for="(item, index) in items">
      <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
      >
      </v-subheader>
      <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
      ></v-divider>
      <v-list-item
          v-else
          :key="item.title"
      >

<!--        <v-card>-->
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <v-avatar>
          <v-img
              :src="item.pic"
              min-height="140"
              min-width="140"
          >
          </v-img>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        </v-avatar>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


        <v-list-item-content>
<!--        <v-list>-->

          <v-col>
            &nbsp;&nbsp;
            <v-list-item-title v-html="item.title"></v-list-item-title>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-col>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <v-row style="margin-top: 2vh;width: 100%">
            <v-col >
              <v-btn height="50" width="250" link color="primary" @click="ExternalLink(item.officialWebsite)">   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      学校官网      &nbsp;&nbsp;&nbsp;       </v-btn>
            </v-col>
            <v-col >
              <v-btn height="50" width="250" link color="primary" @click="ExternalLink(item.fractionalLine)">分数线</v-btn>
            </v-col>
            <v-col >
              <v-btn height="50" width="250" link color="primary " @click="ExternalLink(item.universityForum)">高校论坛</v-btn>
            </v-col>
            <v-col >
              <v-btn height="50" width="250" link color="primary " @click="ExternalLink(item.zhihu)">知乎链接</v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>

        </v-list-item-content>
<!--        </v-list>-->

<!--        </v-card>-->
      </v-list-item>
    </template>
  </v-list>


</template>



<script>
export default {
  data: () => ({
    items: [
      { header: '高校信息' },
      { divider: true, inset: true },
      {
        pic: 'https://upload.wikimedia.org/wikipedia/zh/thumb/d/d6/Beijing_University_of_Posts_and_Telecommunications.jpg/205px-Beijing_University_of_Posts_and_Telecommunications.jpg',
        title: '<span class="headline  black--text font-weight-bold text--lighten-1 font-weigh">北京邮电大学</span>',
        subtitle: '普通本科/理工类/公办/211工程/一流学科建设高校',
        officialWebsite:'http://www.bupt.edu.cn/',
        fractionalLine:'https://gkcx.eol.cn/school/48/provinceline',
        universityForum:'https://bbs.byr.cn/index',
        zhihu:'https://www.zhihu.com/question/401636225',
      },
      {
        pic: 'https://tse1-mm.cn.bing.net/th/id/R-C.4b43eae59b6593d567772d944cd0f2b8?rik=yGGWqRDy2Do83A&riu=http%3a%2f%2fpic18.nipic.com%2f20111220%2f9114815_223214639177_2.jpg&ehk=UBdZOSi91xUXBeqT5avuf01D01PxTpVw%2fz%2f13d3AyVQ%3d&risl=&pid=ImgRaw&r=0',
        title: '<span class="headline  black--text font-weight-bold text--lighten-1 font-weigh">清华大学</span>',
        subtitle: '北京/理工类/985/211/双一流',
        officialWebsite:'https://www.tsinghua.edu.cn/',
        fractionalLine:'https://gkcx.eol.cn/school/140?fromcoop=bdkp',
        universityForum:'http://www.thubbs.cn/',
        zhihu:'https://www.zhihu.com/question/24399025',
      },
      {
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Peking_University_seal.svg/1200px-Peking_University_seal.svg.png',
        title: '<span class="headline  black--text font-weight-bold text--lighten-1 font-weigh">北京大学</span>',
        subtitle: '北京/综合类/985/211/双一流/强基计划',
        officialWebsite:'https://www.pku.edu.cn/',
        fractionalLine:'https://gkcx.eol.cn/school/31/provinceline',
        universityForum:'https://bbs.pku.edu.cn/v2/login.php',
        zhihu:'https://www.zhihu.com/question/24324127',
      },
      {
        pic: 'https://tse1-mm.cn.bing.net/th/id/R-C.0007e42adc8dbc149ae1fa7eaf688fd3?rik=yv7obt4dL9FESg&riu=http%3a%2f%2fpic312.nipic.com%2ffile%2f20200728%2f25102742_095939008081_2.jpg&ehk=U0oU31dkcVAi7vUvdZNMslSH93oxGtbASL0ylqaZ8S4%3d&risl=&pid=ImgRaw&r=0',
        title: '<span class="headline  black--text font-weight-bold text--lighten-1 font-weigh">复旦大学</span>',
        subtitle: '上海/综合类/985/211/双一流/强基计划',
        officialWebsite:'https://www.fudan.edu.cn/',
        fractionalLine:'https://gkcx.eol.cn/school/132?fromcoop=bdkp',
        universityForum:'http://fdubbs.com/',
        zhihu:'https://www.zhihu.com/question/24341214',
      },
      {
        pic:'https://tse1-mm.cn.bing.net/th/id/R-C.d6d6663f19cb6d092dd5103967fa2ce1?rik=Br2afVmAk6O%2bxg&riu=http%3a%2f%2fpic4.nipic.com%2f20091008%2f3514877_105332022531_2.jpg&ehk=w3uo19t4%2fGeXPky2xL%2fbaKu0htW3fBM2UQYo1z3eGjU%3d&risl=&pid=ImgRaw&r=0',
        title: '<span class="headline  black--text font-weight-bold text--lighten-1 font-weigh">上海交通大学</span>',
        subtitle: '上海/综合类/985/211/公办/双一流/强基计划',
        officialWebsite:'https://www.sjtu.edu.cn/',
        fractionalLine:'https://gkcx.eol.cn/school/125?fromcoop=bdkp',
        universityForum:'http://bbs.stmit.com/',
        zhihu:'https://www.zhihu.com/question/24363994',
      },
      {
        pic:'https://tse1-mm.cn.bing.net/th/id/R-C.15f20d48a79d2feb66e312a6300066f8?rik=v7UhQJYhMRAj5Q&riu=http%3a%2f%2fpic.gerenjianli.com%2fxiaohui2046%2fb29.jpg&ehk=oUu7r6qT3IVj8ayTWeo1NKRMh7heViqG3iIO3zqpd4Q%3d&risl=&pid=ImgRaw&r=0',
        title: '<span class="headline  black--text font-weight-bold text--lighten-1 font-weigh">中山大学</span>',
        subtitle: '广州/综合类/985/211/公办/双一流/强基计划',
        officialWebsite:'http://www.sysu.edu.cn/cn/index.htm',
        fractionalLine:'https://gkcx.eol.cn/school/104?fromcoop=bdkp',
        universityForum:'http://bbs.zhxjc.org/',
        zhihu:'https://www.zhihu.com/question/24349296',
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
