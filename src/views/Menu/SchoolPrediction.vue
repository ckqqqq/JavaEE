<template>
  <div>
    <v-row>
      <v-card tile style="width: 100%">

        <!--        标题头-->
        <v-card-title>志愿填报预测</v-card-title>
        <v-card-subtitle>请在此输入您的A、B、C三个志愿，我们将为您展示填报学校的录取情况。</v-card-subtitle>
        <v-divider></v-divider>
        <br>

        <!--        表单选择-->
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  md="4"
              >
                <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="志愿A"
                    required
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
              >
                <v-text-field
                    v-model="lastname"
                    :rules="nameRules"
                    :counter="10"
                    label="志愿B"
                    required
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
              >
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="志愿C"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>


      </v-card>

    </v-row>
  </div>
</template>
