<template>
    <div class="about">
        <h1>This is an schoolprediction page 23333</h1>
        <h1>学校预测</h1>
        <v-btn @click="ExternalLink(link)">
        </v-btn>
    </div>
</template>
<script>
    export default {
        data: () => ({
            link:'http://www.tju.edu.cn/',

        }),
        methods :{
            ExternalLink(link){
                window.location.href = link;
            }
        }
    }
</script>