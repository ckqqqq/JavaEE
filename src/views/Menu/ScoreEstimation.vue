<template>
    <div class="about">
        <h1></h1>

        <v-container class="grey lighten-5">
            <v-col>
                <v-select
                        :items="['北京卷', '天津卷', '账户']"
                        label="试卷"
                ></v-select>
            </v-col>
            <v-col>
                <v-text-field
                        label="分数"
                ></v-text-field>
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