<template>
    <div class="about">

        <v-container class="grey lighten-5">
          <v-col
              class="d-flex"
              cols="20"
              sm="2"
          >
            <v-select
                    max-width="100"
                    :items="['北京卷', '天津卷', '全国卷I','全国卷II']"
                    label="请选择您的试卷"
            ></v-select>
          </v-col>

            <v-row>
                <v-col v-for="subject in subjects" :key="`${subject.title}`" cols="12" md="4">
                    <SubjectCard :subject="subject" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import SubjectCard from '@/components/SubjectCard'
    import SubjectData from '@/data/SubjectData.json'
    export default {
        name: 'DashboardPage',
        components: {
            SubjectCard,
        },
        data() {
            return {
                subjects: SubjectData,
                snackbar: false,
                PaperType:["北京卷","天津卷"]
            }
        },
    }
</script>