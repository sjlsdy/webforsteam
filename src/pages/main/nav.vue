<!--我的游戏库导航-->

<template>
  <div>
    <div class="home-nav-category-box" v-for="(item, index) in navData" :key="item.id">
      <div
        class="home-nav-category-name"
        @click="openCategory(index, item.id)"
      >{{ item.title }} ({{ item.list.length }})</div>
      <div
        :ref="'childcontbox' + item.id"
        style="height:0;overflow: hidden;"
        :class="item.showlist ? 'contant' : ''"
      >
        <div class="home-nav-game-list-box" :ref="'childcont' + item.id">
          <div
            class="home-nav-game-list-item"
            :class="{ active: navSelected === childitem.id }"
            v-for="childitem in item.list"
            :key="childitem.id"
            @click="setNav(childitem.id)"
          >
            <div class="home-nav-game-list-item-icon">
              <img :src="childitem.icon">
            </div>
            <div class="home-nav-game-list-item-text">{{ childitem.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navSelected: '',
      navData: []
    };
  },
  methods: {
    // 选中导航
    setNav(id) {
      let _this = this;
      _this.navSelected = id;
    },
    // 选择游戏库分类导航
    openCategory(_index, _id) {
      let _this = this;
      _this.navData[_index].showlist = true;
      _this.$set(_this.navData, _index, _this.navData[_index]);
      for (let i = 0; i < _this.navData.length; i++) {
        if (i === _index) {
          _this.$refs["childcontbox" + _id][0].style.height =
            _this.$refs["childcont" + _this.navData[i].id][0].offsetHeight +
            "px";
        } else {
          _this.$refs["childcontbox" + _this.navData[i].id][0].style.height =
            "0px";
        }
      }
    },
    // 获取导航数据
    getNav() {
      let _this = this;
      _this.$ajax
        .get("/api/gameLibrary")
        .then(res => {
          console.log(res.data.data);
          _this.navData = res.data.data;
        })
        .catch(response => {
          console.log(response);
        });
    }
  },
  mounted() {
    let _this = this;
    _this.getNav();
  },
  destroyed() {
    let _this = this;
  }
};
</script>

<style scoped>
.contant {
  transition: height 1s;
}
</style>
