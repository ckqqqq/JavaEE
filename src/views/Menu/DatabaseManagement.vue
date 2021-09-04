<template>
  <v-container>
    <v-row>
      <v-col>
        <span>Contacts</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form>
            <v-row>
              <v-col cols="4">
                <v-select
                    :items="['Name', 'Email', 'Nickname']"
                    label="Type"
                ></v-select>
              </v-col>
              <v-col cols="4">
                <v-text-field
                    label="Search"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-btn color="primary">
                  Search
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
  name: 'DatabaseManageement',
  data: () => ({
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      { text: 'Nick name', value: 'nickname' },
      { text: 'Mobile', value: 'mobile' },
      { text: 'Email', value: 'email' },
      { text: 'Birthday', value: 'birthday' }
    ],
    contacts: [
      {
        name: 'Dallas Daly',
        nickname: 'dallas',
        mobile: '010-2312-1234',
        email: 'dallas@home.com',
        birthday: '1990/01/02'
      },
      {
        name: 'Aniyah Tierney',
        nickname: 'aniyah',
        mobile: '010-4231-5463',
        email: 'aniyah@home.com',
        birthday: '1980/01/02'
      },
      {
        name: 'Darnell Phillips',
        nickname: 'darnell',
        mobile: '010-8645-9634',
        email: 'darnell@home.com',
        birthday: '1970/01/02'
      },
      {
        name: 'Diana Henry',
        nickname: 'diana',
        mobile: '010-5665-2323',
        email: 'diana@home.com',
        birthday: '1960/01/02'
      },
      {
        name: 'Paxton Pennington',
        nickname: 'paxton',
        mobile: '010-6565-8787',
        email: 'paxton@home.com',
        birthday: '1950/01/02'
      },
      {
        name: 'Blanca Ruiz',
        nickname: 'blanca',
        mobile: '010-1212-3434',
        email: 'blanca@home.com',
        birthday: '1940/01/02'
      },
      {
        name: 'Bilal Finch',
        nickname: 'bilal',
        mobile: '010-7564-3455',
        email: 'bilal@home.com',
        birthday: '1930/01/02'
      },
      {
        name: 'Joanna Hoover',
        nickname: 'joanna',
        mobile: '010-8787-1234',
        email: 'joanna@home.com',
        birthday: '2000/01/02'
      },
      {
        name: 'Garrison White',
        nickname: 'garrison',
        mobile: '010-6789-1234',
        email: 'garrison@home.com',
        birthday: '2001/01/02'
      },
      {
        name: 'Lizbeth Bauer',
        nickname: 'lizbeth',
        mobile: '010-8970-1524',
        email: 'lizbeth@home.com',
        birthday: '2001/01/02'
      },
      {
        name: 'Kevin McDougall',
        nickname: 'kevin',
        mobile: '010-2312-3211',
        email: 'kevin@home.com',
        birthday: '2002/01/02'
      },
      {
        name: 'Carrie Hay',
        nickname: 'carrie',
        mobile: '010-7675-9898',
        email: 'carrie@home.com',
        birthday: '2003/01/02'
      }
    ]
  })
}
</script>
