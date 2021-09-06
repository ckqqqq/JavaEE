<template>
    <v-container>
        <v-row>
            <v-col>
                <v-btn
                        color="info"
                        @click="this.TestPos"
                >测试按钮
                </v-btn>
                <v-text-field label="输入测试url " v-model="test_url" prepend-icon="mdi-account-circle"/>
                <v-text-field label="var1 " v-model="test_var1" prepend-icon="mdi-account-circle"/>
                <v-text-field label="var2 " v-model="test_var2" prepend-icon="mdi-account-circle"/>
                <span>本班一本率 （后端传，有时间放个图）</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-form>
                    <v-row>
                        <v-col cols="4">
                            <v-select
                                    :items="['姓名', '班级', '账户']"
                                    label="关键词"
                            ></v-select>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                    label="搜索"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="2">
                            <v-btn color="primary">
                                搜索
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
<!--        -->
        <v-row>
            <v-col>
                <v-data-table
                        :headers="headers"
                        :items="desserts"
                        sort-by="class"
                        class="elevation-1"
                >
                    <template v-slot:top>
                        <v-toolbar
                                flat
                        >
                            <v-toolbar-title>账户信息</v-toolbar-title>
                            <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                            ></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog
                                    v-model="dialog"
                                    max-width="500px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                            color="primary"
                                            dark
                                            class="mb-2"
                                            v-bind="attrs"
                                            v-on="on"
                                    >
                                        新建
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">{{ formTitle }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                >
                                                    <v-text-field
                                                            v-model="editedItem.Account"
                                                            label="账户"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                >
                                                    <v-text-field
                                                            v-model="editedItem.password"
                                                            label="密码"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                >
                                                    <v-text-field
                                                            v-model="editedItem.real_name"
                                                            label="real_name"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                >
                                                    <v-text-field
                                                            v-model="editedItem.score"
                                                            label="分数"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                >
                                                    <v-text-field
                                                            v-model="editedItem.class"
                                                            label="班级"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="close"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="save"
                                        >
                                            Save
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon
                                small
                                class="mr-2"
                                @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                                small
                                @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:no-data>
                        <v-btn
                                color="primary"
                                @click="initialize"
                        >
                            Reset
                        </v-btn>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
<!--&lt;!&ndash;        &ndash;&gt;-->
<!--        <v-snackbar-->
<!--                v-model="snack"-->
<!--                :timeout="3000"-->
<!--        >-->

<!--            <template v-slot:action="{ attrs }">-->
<!--                <v-btn-->
<!--                        v-bind="attrs"-->
<!--                        text-->
<!--                        @click="snack = false"-->
<!--                >-->
<!--                    Close-->
<!--                </v-btn>-->
<!--            </template>-->
<!--        </v-snackbar>-->
<!--&lt;!&ndash;          &ndash;&gt;-->

    </v-container>
</template>
<script>
    import axios from "axios";

    export default {
        name: 'Contacts',
        data: () => ({

            dialog: false,
            dialogDelete: false,
            headers: [
                {
                    text: '账户',
                    align: 'start',
                    sortable: false,
                    value: 'Account',
                },
                { text: '密码', value: 'password' },
                { text: '姓名', value: 'real_name' },
                { text: '分数', value: 'score' },
                { text: '班级号', value: 'class' },
                { text: '修改', value: 'actions', sortable: false },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                Account: '',
                password: 0,
                real_name: 0,
                score: 0,
                class: 0,
            },
            defaultItem: {
                Account: '',
                password: 0,
                real_name: 0,
                score: 0,
                class: 0,
            },
            test_url:"",//测试的url
            test_var1:"",//测试的var1
            test_var2:"",//测试的var2

        }),

        computed: {
            formTitle () {
                return this.editedIndex === -1 ? '新建' : '编辑'
            },
        },

        watch: {
            dialog (val) {
                val || this.close()
            },
            dialogDelete (val) {
                val || this.closeDelete()
            },
        },

        created () {
            this.initialize()
        },

        methods: {
            TestPos: function () {
                var that = this;
                var url =this.test_url;
                // rl = 'http://127.0.0.1:9090/student/login';
                // url = 'http://127.0.0.1:9090/student/login';
                // axios.post("http://127.0.0.1:9090/student/login",{id:'300',password:'ming'})
                axios({
                    url: url,
                    method: 'post',
                    //这里传入变量
                    params: {
                        id: that.test_var1,
                        password: that.test_var2,
                    }
                })
                    .then(function (response) {
                        // console.log(that.resp.data.data)
                        alert("欢迎登陆，用户：" + response.data.d);
                        if (response.data.msg === "成功") {
                            that.resp = response;
                            that.isLogin = true;
                            alert("欢迎登陆，用户：" + that.resp.data.data['name']);
                            //存储当前用户的登录状态
                            //触发提示：后期可以删除
                            alert("欢迎登陆，用户：" + that.resp.data.data['name']);
                            //跳转到指定页面
                            that.$router.push('/');
                        } else {
                            alert("您的用户名或密码输入错误，请检查。");
                        }
                    })
            },
            initialize () {
                this.desserts = [
                    {
                        Account: 'Frozen Yogurt',
                        password: 159,
                        real_name: 6.0,
                        score: 24,
                        class: 4.0,
                    },
                    {
                        Account: 'Ice cream sandwich',
                        password: 237,
                        real_name: 9.0,
                        score: 37,
                        class: 4.3,
                    },
                    {
                        Account: 'Eclair',
                        password: 262,
                        real_name: 16.0,
                        score: 23,
                        class: 6.0,
                    },
                    {
                        Account: 'Cupcake',
                        password: 305,
                        real_name: 3.7,
                        score: 67,
                        class: 4.3,
                    },
                    {
                        Account: 'Gingerbread',
                        password: 356,
                        real_name: 16.0,
                        score: 49,
                        class: 3.9,
                    },
                    {
                        Account: 'Jelly bean',
                        password: 375,
                        real_name: 0.0,
                        score: 94,
                        class: 0.0,
                    },
                    {
                        Account: 'Lollipop',
                        password: 392,
                        real_name: 0.2,
                        score: 98,
                        class: 0,
                    },
                    {
                        Account: 'Honeycomb',
                        password: 408,
                        real_name: 3.2,
                        score: 87,
                        class: 6.5,
                    },
                    {
                        Account: 'Donut',
                        password: 452,
                        real_name: 25.0,
                        score: 51,
                        class: 4.9,
                    },
                    {
                        Account: 'KitKat',
                        password: 518,
                        real_name: 26.0,
                        score: 65,
                        class: 7,
                    },
                ]
            },

            editItem (item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialogDelete = true
            },

            deleteItemConfirm () {
                this.desserts.splice(this.editedIndex, 1)
                this.closeDelete()
            },

            close () {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            closeDelete () {
                this.dialogDelete = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save () {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            },
        },
    }
</script>

