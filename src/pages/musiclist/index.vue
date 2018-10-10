<template>
    <div class="musiclist">
        <div class="typename">{{typename}}</div>
        <ul>
            <li v-for="(items,index) in musicList" :index="index" :key="items">
                <!-- <audio :src=items.realURL :poster=items.musicpic :name=items.m_name :author=items.musicauthor id="audio"></audio> -->
                <!-- <img :src=items.musicpic mode="widthFix" circular="true" indicator-color="#fafaaf" > -->
                <p class="musicname">{{items.m_name}}</p>
                <div class="beginmusic" v-if="index != musicnum" @click="audioPlay(index)">>></div>
                <div class="beginmusic" v-else @click="audioStop()">||</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            typeid: 0,
            musicList: [],
            typename: '',
            audioCtx: null,
            musicnum: null,
            stopnum : null
        }
    },
    onLoad: function (options) {
        this.typeid = options.typeid
    },
    onReady: function () {
        this.typename = this.$store.state.typename
        this.audioCtx = wx.createInnerAudioContext()

        let url = 'https://www.easy-mock.com/mock/5bbb2356b8f16454280d5e87/TestMusic/music/findMusicList/typeid/' + this.typeid
        let url1 = 'http://dsc.com/public/Index.php/music/index/findMusicList'

        this.$http.get(url).then(res => {
            this.musicList = res.data.data
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        audioPlay: function (n) {
            if (this.stopnum != n) {
                this.audioCtx.destroy()
                this.audioCtx.src = this.musicList[n].realURL
            }
            this.musicnum = n
            this.stopnum = n
            this.audioCtx.play()
        },
        audioStop: function () {
            this.audioCtx.pause()
            this.musicnum = null
        }
    }
}
</script>

<style scpoed>
.musiclist {
  font-size: 13px;
  color: #333333;
}
.musiclist li {
  border-bottom: 1px solid #fafafa;
  padding: 0 20px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.typename {
  font-size: 16px;
  line-height: 50px;
  color: brown;
  text-align: center;
  font-weight: bold;
}
.musicname {
  width: 100%;
}
.beginmusic {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  line-height: 20px;
  border: 1px solid #333333;
  background-color: #fff;
  text-align: center;
}
</style>
