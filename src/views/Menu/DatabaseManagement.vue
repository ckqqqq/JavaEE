<template>
  <v-container>
    <v-row>
      <v-col>
        <span>DatabaseManageement</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form>
            <v-row>
              <v-col cols="4">
                <v-select
                    :items="['姓名', 'Email', '账户']"
                    label="类型"
                ></v-select>
              </v-col>
              <v-col cols="4">
                <v-text-field
                    label="查找"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-btn color="primary">
                  查找
                </v-btn>
              </v-col>
            </v-row>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
            :headers="headers"
            :items="contacts"
            :items-per-page="10"
            dense
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  姓名: 'DatabaseManageement',
  data: () => ({
    headers: [
      {
        text: '姓名',
        align: 'start',
        sortable: true,
        value: '姓名',
      },
      { text: '账户', value: '账户' },
      { text: 'Mobile', value: 'mobile' },
      { text: 'Email', value: 'email' },
      { text: '分数', value: '分数' }
    ],
    contacts: [
      {
        姓名: 'Dallas Daly',
        账户: 'dallas',
        mobile: '010-2312-1234',
        email: 'dallas@home.com',
        分数: '199 '
      },
      {
        姓名: 'Aniyah Tierney',
        账户: 'aniyah',
        mobile: '010-4231-5463',
        email: 'aniyah@home.com',
        分数: '198 '
      },
      {
        姓名: 'Darnell Phillips',
        账户: 'darnell',
        mobile: '010-8645-9634',
        email: 'darnell@home.com',
        分数: '197 '
      },
      {
        姓名: 'Diana Henry',
        账户: 'diana',
        mobile: '010-5665-2323',
        email: 'diana@home.com',
        分数: '196 '
      },
      {
        姓名: 'Paxton Pennington',
        账户: 'paxton',
        mobile: '010-6565-8787',
        email: 'paxton@home.com',
        分数: '195 '
      },
      {
        姓名: 'Blanca Ruiz',
        账户: 'blanca',
        mobile: '010-1212-3434',
        email: 'blanca@home.com',
        分数: '194 '
      },
      {
        姓名: 'Bilal Finch',
        账户: 'bilal',
        mobile: '010-7564-3455',
        email: 'bilal@home.com',
        分数: '193 '
      },
      {
        姓名: 'Joanna Hoover',
        账户: 'joanna',
        mobile: '010-8787-1234',
        email: 'joanna@home.com',
        分数: '200 '
      },
      {
        姓名: 'Garrison White',
        账户: 'garrison',
        mobile: '010-6789-1234',
        email: 'garrison@home.com',
        分数: '2001/01/02'
      },
      {
        姓名: 'Lizbeth Bauer',
        账户: 'lizbeth',
        mobile: '010-8970-1524',
        email: 'lizbeth@home.com',
        分数: '2001/01/02'
      },
      {
        姓名: 'Kevin McDougall',
        账户: 'kevin',
        mobile: '010-2312-3211',
        email: 'kevin@home.com',
        分数: '200'
      },
      {
        姓名: 'Carrie Hay',
        账户: 'carrie',
        mobile: '010-7675-9898',
        email: 'carrie@home.com',
        分数: '200'
      }
    ]
  })
}
</script>
