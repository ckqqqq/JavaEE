<!--labels 代表表格的横坐标-->
<!--subjects 代表表格的值-->
<template>
  <v-card :color="subject.color" dark>
    <v-card-text>
        <v-card-text class="text-center">
            <div class="display-1 font-weight-black">{{ subject.title }}</div>
        </v-card-text>
            <v-row justify="center">
                <div class="pa-0">北京卷</div>

            </v-row>
        <v-row justify="center">
            <v-btn class="d-flex align-center"
                   color="rgba(0, 0, 0, .1)"
                   height="50"
                   width="200"
                   style="alignment: center"
            >立即估分</v-btn>
        </v-row>
    </v-card-text>


  </v-card>
</template>

<script>
export default {
  name: 'SubjectCard',
  props: {
    subject: {
      type: Object,
      required: true
    }
  }
}
</script>