<template>
    <div>
        <v-tabbar :selectNavIndex=selectNavIndex></v-tabbar>
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
            selectNavIndex: 0
        }
    }
}
</script>

<style>
</style>
