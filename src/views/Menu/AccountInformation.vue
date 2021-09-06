<template>
<div class="about">
<v-col>
  <!--        个人信息卡片-->
  <v-card style="float: left"
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>

    <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>{{ name }}
      <v-btn text style="float:right;">修改个人信息</v-btn>
    </v-card-title>

    <v-card-text>
      <v-row
          align="left"
          class="mx-0"
      >
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ province }}
      </div>

      <div>{{ signs }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>高考分数：{{ score }}</v-card-title>

  </v-card>

  <!--        报考倒计时日历显示-->
  <!--      <p style="margin-top: 5vh;">距离报考截止日期还有：{{deadline}} 天</p>-->
  <v-date-picker v-model="picker" width="40vh"
                 style="min-height: 45vh; margin-top: 5vh;margin-left: 4vh"></v-date-picker>
  <!--分数预测曲线图-->
  <v-card
      class="mx-auto text-center"
      color="#64c887"
      dark
      width="55vh"
      max-height="50vh"
      style="float:right; margin-top: 5vh; margin-right: 10vh"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
            :value="value"
            color="rgba(255, 255, 255, .7)"
            height="100"
            padding="24"
            stroke-linecap="round"
            smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-title class="justify-center">
      <div>
        {{ province }} 高考分数分布图
      </div>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
          block
          text
      >
        转到分数填报
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>

<!--      相关信息展示-->
<v-col>
  <v-btn block color="success" align="left">报考信息展示</v-btn>
  <v-row align="right" style="margin-top: 2vh">
    <v-item-group
        v-model="window"
        class="shrink mr-6"
        mandatory
        tag="v-flex"
    >
      <v-item
          v-for="n in length"
          :key="n"
          v-slot="{ active, toggle }"
      >
        <div>
          <v-btn
              :input-value="active"
              icon
              @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col>
      <v-window
          v-model="window"
          class="elevation-1"
          vertical
      >
        <v-window-item
            v-for="n in length"
            :key="n"
        >
          <v-card flat>
            <v-card-text>
              <v-row
                  class="mb-4"
                  align="center"
              >
                <v-avatar
                    color="blue"
                    class="mr-4"
                ></v-avatar>
                <strong class="text-h6">院校风采 {{ n }}</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-row>
              <p>
                北京大学（Peking
                University），简称“北大”，是中华人民共和国教育部直属的全国重点大学，位列“双一流”、“211工程”、“985工程”，入选“学位授权自主审核单位”、“基础学科拔尖学生培养试验计划”、“基础学科招生改革试点”、“高等学校创新能力提升计划”、“高等学校学科创新引智计划”，为九校联盟、松联盟、中国大学校长联谊会、京港大学联盟、亚洲大学联盟、东亚研究型大学协会、国际研究型大学联盟、环太平洋大学联盟、全球大学校长论坛、21世纪学术联盟、东亚四大学论坛、国际公立大学论坛、中俄综合性大学联盟成员。
              </p>
              <p>
                清华大学（Tsinghua
                University），简称“清华”，是中华人民共和国教育部直属的全国重点大学，位列国家“双一流”A类、“985工程”、“211工程”，入选“2011计划”、“珠峰计划”、“强基计划”、“111计划”，为九校联盟（C9）、松联盟、中国大学校长联谊会、亚洲大学联盟、环太平洋大学联盟、清华—剑桥—MIT低碳大学联盟成员、中国高层次人才培养和科学技术研究的基地，被誉为“红色工程师的摇篮”。
              </p>
              <p>
                北京邮电大学（Beijing University of Posts and
                Telecommunications），简称北邮，是中华人民共和国教育部直属、工业和信息化部共建的全国重点大学，位列国家“世界一流学科建设高校”、“211工程”、“985工程优势学科创新平台”，为北京高科大学联盟、中国人工智能教育联席会、CDIO工程教育联盟创始成员，入选国家“111计划”、“2011计划”、中国政府奖学金来华留学生接收院校、教育部第一批卓越工程师教育培养计划高校、国家建设高水平大学公派研究生项目、教育部首批“新工科”研究与实践项目、全国首批深化创新创业教育改革示范高校、一流网络安全学院建设示范项目高校、国家大学生文化素质教育基地、全国邮政行业人才培养基地。
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</v-col>
</div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,

    name: 'XiaoMing',
    email: '233@qq.com',
    score: '623',
    province: '北京 朝阳',
    signs: '薪火相传，敬业乐群',

    //页面显示区轮播
    length: 3,
    window: 0,

    //高考分数段数据
    value: [
      423,
      446,
      675,
      510,
      590,
      610,
      760,
      1000,
      0,
    ],

    //日历日期选择
    picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    deadline: '2',
  }),

  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style>
.body {
  background-color: #64b587;
}
</style>
