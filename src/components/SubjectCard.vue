<!--labels 代表表格的横坐标-->
<!--subjects 代表表格的值-->
<template>
  <v-card :color="subject.color"  max-height="450" dark>

    <v-img
        class="white--text align-end"
        height="230px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>禹门已准桃花浪，月殿先收桂子香</v-card-title>
    </v-img>

    <v-card-text>
        <v-card-text class="text-center">
            <div class="display-1 font-weight-black">{{ subject.title }}</div>
        </v-card-text>
<!--            <v-row justify="center">-->
<!--              <div class="pa-0">北京卷</div>-->
<!--            </v-row>-->
      <br>
        <v-row justify="center">
            <v-btn class="d-flex align-center"
                   color="rgba(0, 0, 0, .1)"
                   height="50"
                   width="200"
                   style="alignment: center"
                   @click="ExternalLink(subject.link)">立即估分
            ></v-btn>
        </v-row>
      <br>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SubjectCard',
  props: {
    subject: {
      type: Object,
      require111d: true,
    }
  },
  methods :{
    ExternalLink(link){
      window.location.href = link;
    }
  }

}
</script>