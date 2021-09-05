<template>
  <div class="about">
    <h1>首页</h1>

    <!--    第一栏布局：高考成绩、模拟服务-->
    <v-row style="margin-top: 2vh; margin-left: 4vh; width: 100%">

      <v-col width="20vh">
        <v-btn color="primary" style="width:100%; margin-bottom: 1vh;">您的高考成绩</v-btn>
        <v-card>
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-center">
                  考试科目
                </th>
                <th class="text-center">
                  分数
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="item in course"
                  :key="item.name"
              >
                <td class="text-center">{{ item.name }}</td>
                <td class="text-center blue--text">{{ item.score }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>

      <v-col width="60vh">
        <v-card width="50vh">
          <v-card-title class="green white--text">志愿服务</v-card-title>

          <v-img
              height="80"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-list dense>
            <v-list-item-group
                v-model="selectedItem"
                color="primary"
            >
              <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

        </v-card>
      </v-col>
    </v-row>

    <!--    第二栏布局:时间段鱼骨图、图片展示-->
    <v-row style="margin-top: 2vh; margin-left: 4vh; width: 100%">

      <!--      鱼骨图-->
      <v-row style="max-width: 45%">
        <v-timeline align-top :dense="true">
          <v-timeline-item
              v-for="(item, i) in timeline"
              :key="i"
              :color="item.color"
              :icon="item.icon"
              fill-dot
          >
            <v-card :color="item.color" dark>
              <v-card-title class="title pt-3 pb-3">
                <h3 class="title">{{ item.title }}</h3>
              </v-card-title>
              <v-card-text class="white text--primary">
                <p class="pt-3 body-1 mb-0">
                  {{ item.text }}
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-row>
      <!--      图片轮播展示-->
      <v-row style="max-width: 40%; margin-left: 5vh">
      <v-card width="100%">
        <v-toolbar
            color="green"
            dark
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>院校风采展示</v-toolbar-title>
        </v-toolbar>

        <v-container fluid>
          <v-row dense>
            <v-col
                v-for="card in cards"
                :key="card.title"
                :cols="card.flex"
            >
              <v-card>
                <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                >
                  <v-card-title v-text="card.title"></v-card-title>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      </v-row>

    </v-row>
    <!--      院校信息展示-->
    <v-col>
      <v-card>
        <v-card-title>报考信息展示</v-card-title>

        <v-row style="margin-top: 2vh; max-width: 100%; margin: 0">
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
      </v-card>

    </v-col>


  </div>
</template>

<script>
export default {
  data() {
    return {
      //鱼骨图表格
      timeline: [
        {
          "color": "red lighten-2",
          "icon": "mdi-star",
          "title": "6月7日 晚上20：00",
          "text": "高考结束，高考参考答案可供下载。"
        },
        {
          "color": "purple darken-1",
          "icon": "mdi-ring",
          "title": "6月23日 下午13：00",
          "text": "省教育考试院正式开放成绩查询，系统正式开放报考查询"
        },
        {
          "color": "green lighten-1",
          "icon": "mdi-balloon",
          "title": "6月25日 下午2：00",
          "text": "系统导入一分一段表，更新了院校与招生计划，提供报考咨询"
        },
        {
          "color": "indigo",
          "icon": "mdi-gift",
          "title": "6月27日 下午18：00",
          "text": "《高考成绩分析以及志愿报考》白皮书现已上线平台，可供考生免费下载。"
        }
      ],

      //高考分数表格
      course: [
        {
          name: '语文',
          score: 159,
        },
        {
          name: '数学',
          score: 237,
        },
        {
          name: '外语',
          score: 262,
        },
        {
          name: '综合',
          score: 305,
        },
      ],

      //志愿服务
      selectedItem: 1,
      items: [
        {text: '模拟填报', icon: 'mdi-clock'},
        {text: '学校咨询', icon: 'mdi-account'},
        {text: '留言查看', icon: 'mdi-flag'},
      ],

      //报考信息展示
      length: 3,
      window: 0,

      //用于院校风采展示的图片链接
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }
  },
}
</script>
