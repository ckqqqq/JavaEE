<template>
    <v-app id="layout">
<!--侧边栏        <>-->

        <v-navigation-drawer
                v-model="drawer"
                expand-on-hover="true"
                absolute="true"
        >
<!--            颜色               -->
            <v-sheet
                    color="grey lighten-4"
                    class="pa-4"
            >
                <v-avatar
                        class="mb-4"
                        color="grey darken-1"
                        size="64"
                ></v-avatar>

                <div>john@vuetifyjs.com</div>
            </v-sheet>

            <v-divider></v-divider>

            <v-list>
                <v-list-item
                        v-for="[icon, text] in links"
                        :key="icon"
                        link
                >
                    <v-list-item-icon>
                        <v-icon>{{ icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

            <v-container
                    class="py-8 px-6"
                    fluid
            >
              <v-btn type="primary" @click="putin">hello</v-btn>
              <p>{{dat}}</p>
                <v-row>
                    <v-col
                            v-for="card in cards"
                            :key="card"
                            cols="12"
                    >
                        <v-card>
                            <v-subheader>{{ card }}</v-subheader>

                            <v-list two-line>
                                <template v-for="n in 6">
                                    <v-list-item

                                            :key="n"
                                    >
                                        <v-list-item-avatar color="grey darken-1">
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <v-list-item-title>Message {{ n }}</v-list-item-title>

                                            <v-list-item-subtitle>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>

                                    <v-divider
                                            v-if="n !== 6"
                                            :key="`divider-${n}`"
                                            inset
                                    ></v-divider>
                                </template>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
              <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :items-per-page="5"
                  class="elevation-1"
              ></v-data-table>
            </v-container>
    </v-app>
</template>

<!-- 使用axios -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>

    import axios from "axios";

    export default {
        data: () => ({
          cards: ['Today', 'Yesterday', 'Friday'],
          drawer: null,
          dat:'hh',
          links: [
            ['mdi-inbox-arrow-down', 'Inbox'],
            ['mdi-send', 'Send'],
            ['mdi-delete', 'Trash'],
            ['mdi-alert-octagon', 'Spam'],
          ],
          headers: [
            {
              text: 'Dessert (100g serving)',
              align: 'start',
              sortable: false,
              value: 'name',
            },
            {text: 'Calories', value: 'calories'},
            {text: 'Fat (g)', value: 'fat'},
            {text: 'Carbs (g)', value: 'carbs'},
            {text: 'Protein (g)', value: 'protein'},
            {text: 'Iron (%)', value: 'iron'},
          ],
          desserts: [
            {
              name: 'Frozen Yogurt',
              calories: 159,
              fat: 6.0,
              carbs: 24,
              protein: 4.0,
              iron: '1%',
            },
            {
              name: 'Ice cream sandwich',
              calories: 237,
              fat: 9.0,
              carbs: 37,
              protein: 4.3,
              iron: '1%',
            },
            {
              name: 'Eclair',
              calories: 262,
              fat: 16.0,
              carbs: 23,
              protein: 6.0,
              iron: '7%',
            },
            {
              name: 'Cupcake',
              calories: 305,
              fat: 3.7,
              carbs: 67,
              protein: 4.3,
              iron: '8%',
            },
            {
              name: 'Gingerbread',
              calories: 356,
              fat: 16.0,
              carbs: 49,
              protein: 3.9,
              iron: '16%',
            },
            {
              name: 'Jelly bean',
              calories: 375,
              fat: 0.0,
              carbs: 94,
              protein: 0.0,
              iron: '0%',
            },],
        } ),
        methods:{
          putin:function () {
            var that = this;
            axios.get("http://127.0.0.1:9090/student/all")
            .then(function (response){
              that.dat = response.data.data[0];
              console.log(response.data.data);
              for (var a in that.dat){
                alert(that.dat[a]);
              }
              //that.desserts.push();
            })
          }
        }
    }
</script>
