<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-combobox
                        v-model="select"
                        :items="getName(desserts)"
                        label="I use a scoped slot"
                        multiple
                        chips
                >

                </v-combobox>
            </v-col>

        </v-row>
        <v-data-table
                :headers="headers"
                :items="desserts"
                item-key="name"
                class="elevation-1"
                :search="search"
                :custom-filter="filterOnlyCapsText"
        >
        <!-- //////////////////// -->
            <template v-slot:top>
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

                <v-combobox
                    v-model="select[0]"
                    :counter="32"
                    :items="getName(desserts)"
                    label="志愿A"
                    required
                    chips
                ></v-combobox>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
              >
                <v-combobox
                    v-model="select[1]"
                    :counter="32"
                    :items="getName(desserts)"
                    label="志愿B"
                    required
                ></v-combobox>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
              >
                <v-text-field
                    v-model="select[2]"
                    :counter="32"
                    :items="getName(desserts)"
                    label="志愿C"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>

    </v-row>
                <v-text-field
                        v-model="search"
                        label="参考界面  "
                        class="mx-4"
                ></v-text-field>
            </template>
            <!-- /////////////// -->
            <template v-slot:body.append>
                <tr>
                    <td></td>
                    <td>
                        <v-text-field
                                v-model="calories"
                                type="number"
                                label="Less than"
                        ></v-text-field>
                    </td>
                    <td colspan="4"></td>
                </tr>
            </template>
        </v-data-table>
        <v-divider> </v-divider>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                select: [
                    '北大'],
                search: '',
                calories: '',
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
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: '2%',
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: '45%',
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: '22%',
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: '6%',
                    },
                ],
            }
        },
        computed: {
            headers () {
                return [
                    {
                        text: 'Dessert (100g serving)',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    {
                        text: 'Calories',
                        value: 'calories',
                        filter: value => {
                            if (!this.calories) return true

                            return value < parseInt(this.calories)
                        },
                    },
                    { text: 'Fat (g)', value: 'fat' },
                    { text: 'Carbs (g)', value: 'carbs' },
                    { text: 'Protein (g)', value: 'protein' },
                    { text: 'Iron (%)', value: 'iron' },
                ]
            },
        },
        methods: {
            ChangeSelect(select,index,value){
                select[index]=value
                return select;
            },
            filterOnlyCapsText (value, search, item) {
                return value != null &&
                    search != null &&
                    typeof value === 'string' &&
                    value.toString().toLocaleUpperCase().indexOf(search) !== -1
            },
            getName(ObjList){
                var itemList=new Array("外")
                for (var i=0;i<ObjList.length;i++){
                    itemList.push(ObjList[i]['name'])
                }
                return itemList
            },
        },

    }
</script>