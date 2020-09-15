var app = new Vue({
    el: "#app",
    data: {
        list: [],
        addText: "",
        searchword: ""
    },
    methods: {
        addToDo: function () {
            if (this.addText !== "") {
                this.list.push({
                    text: this.addText,
                    isChecked: false,
                });
            }
            //追加したらtextを空欄にする
            this.addText = "";
        },
        deleteBtn: function () {
            this.list = this.list.filter(todo => !todo.isChecked);
        }
    },
    computed: {
        tasklength: function () {
            return this.list.filter(todo => !todo.isChecked).length;
        },
        searchlist: function () {
            return this.list.filter(todo => todo.text.indexOf(this.searchword) > -1);
            //filterのコールバック関数(function(todo))をアロー関数(todo =>)にしたら正常に動作した。なぜ？
            //下記ではうまく動作しない
            //return this.list.filter(function(todo) {todo.text.indexOf(this.searchword) > -1});

            //下記のforEach文でも正常に動作したがアロー関数をfunction(todo)に変更したらやはり動作しなかった。
            /*
            var searchlist = [];
            this.list.forEach(todo => {
                if(todo.text.indexOf(this.searchword)>-1){
                    searchlist.push(todo);
                }
            });
            return searchlist;
            */

           /**
            * 原因 → this.searchwordの中身がundefinedのため、filterでtrueが返らずsearchlistが空になってしまっていた。
            * なぜ → JavaScriptではコールバック関数内でthisがグローバルのwindowを差してしまうため。
            * 解決:
            *   → 1 コールバック関数の外側で一度thisを他の変数に代入し、それを関数内で用いる。
            *   → 2 bindを用いる。
            *   → 3 アロー関数を用いる。
            */
         
        }
    },
    //watchでlistの変更を監視
    //オブジェクト内の変更を監視するにはdeep: true と handler を用いる
    watch: {
        list: {
            handler: function () {
                //jsonを文字列に変換してlistをlocalStorageに保存
                localStorage.setItem("list", JSON.stringify(this.list))
            },
            deep: true
        }
    },
    //マウントされた(DOM作成)時にlocalStorageからデータを取得("list"がnulの際は空の配列を入れる)
    mounted: function () {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    }
});