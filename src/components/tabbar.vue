<template>
    <div class="tabbar">
        <ul v-if="navList.length > 0">
            <li v-for="(item , index) in navList" :key="item" :index="index" @click="selectNavItem(index , item.pagePath)">
                <div>
                    <p :class="selectNavIndex === index ? 'item-text active' : 'item-text'">{{item.text}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["selectNavIndex"],
    data() {
        return {
            navList: [
                {
                    pagePath: "/pages/index/main",
                    text: "首页"
                },
                {
                    pagePath: "/pages/type/main",
                    text: "排行榜"
                }
            ]
        }
    },
    methods: {
        selectNavItem: function (index, pagePath) {
            if (index === this.selectNavIndex) {
                return false;
            }
            this.bindViewTap(pagePath);
        },
        bindViewTap(url) {
            wx.switchTab({
                url
            });
        }
    }
}
</script>

<style scoped>
.tabbar ul {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #dadada;
  box-shadow: 0 0 5px #aaaaaa;
  font-size: 14px;
  background-color: #fafafa;
}
.active {
  color: crimson;
}
</style>
