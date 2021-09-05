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

  </div>
</template>

<script>
export default {
  data () {
    return {
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

      selectedItem: 1,
      items: [
        { text: '模拟填报', icon: 'mdi-clock' },
        { text: '学校咨询', icon: 'mdi-account' },
        { text: '留言查看', icon: 'mdi-flag' },
      ],
    }
  },
}
</script>
