<template>
    <div class="content">
        <div class="musictype">
            <ul>
                <li v-for="(item ,index) in musictype" :key=item :index=index>
                    <img :src="item.typepic" mode="widthFix" circular="true" indicator-color="#fafaaf" @click="ToNewPage(item.typeid,item.typename)" />
                    <p>{{item.typename}}</p>
                </li>
            </ul>
        </div>
        <div class="tabbar">
            <v-tabbar :selectNavIndex=selectNavIndex></v-tabbar>
        </div>
    </div>
</template>

<script>
import vTabbar from '../../components/tabbar.vue'
export default {
    components: {
        vTabbar
    },
    onShow: function () {
        wx.hideTabBar();
    },
    data() {
        return {
            selectNavIndex: 1,
            musictype: []
        }
    },
    created: function () {
        let url = 'http://dsc.com/public/Index.php/music/index/findMusicType'
        let url1 = 'https://www.easy-mock.com/mock/5bbb2356b8f16454280d5e87/TestMusic/music/musicType'
        this.$http.get(url1).then(res => {
            // console.log(res)
            this.musictype = res.data.data
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        ToNewPage: function (typeid, typename) {
            this.$store.commit('CHANGE_TYPENAME', typename)
            wx.navigateTo({
                url: '../../pages/musiclist/main?typeid=' + typeid
            })
        }
    }
}
</script>

<style scoped>
.musictype,
.musictype ul {
  width: 100%;
}
.musictype ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  font-size: 14px;
}
.musictype li {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.musictype li p {
  line-height: 32px;
}
.musictype li img {
  width: 100%;
}
.tabbar {
  height: 50px;
}
</style>
