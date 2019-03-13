<template>
  <div class="home-page-frame">
		<gameplay v-model="play"></gameplay>
    <div class="home-header-frame">
      <div>一口叉</div>
    </div>
    <div class="home-nav-frame">
      <gamenav></gamenav>
    </div>
    <div class="home-content-frame">
      <div class="home-content-topic">
        <div class="home-content-topic-info-box">
          <div class="home-game-title">
            <div class="home-game-title-icon">
              <img src="../../static/images/logo001-001.png">
            </div>
            <div>GOD OF WAR IV</div>
          </div>
          <div class="home-game-more">
            <div class="home-game-live-box">
              <div class="home-game-live">
                <strong>601,128</strong>
                playing right now
              </div>
            </div>
            <div class="home-game-links">
              <a href="###">Store</a>
              <a href="###">News</a>
              <a href="###">Community</a>
              <a href="###">Support</a>
            </div>
          </div>
        </div>
        <canvas id="canvas1" ref="canvas1" :width="canvasWidth" height="200"></canvas>
      </div>
      <div class="home-content-game">
        <div class="home-gameplay-frame">
          <div class="home-gameplay-btn" @click="playgame"></div>
          <div class="home-gameplay-info-box">
            <div class="home-gameplay-info-item">
              <div class="t">YOU PALYED</div>
              <div class="d">2696 hours</div>
            </div>
            <div class="home-gameplay-info-item">
              <div class="t">LAST PALYED</div>
              <div class="d">3 days ago</div>
            </div>
            <div class="home-gameplay-info-item">
              <div class="t">ACHEVEMENTS</div>
              <div class="d">128 out of 167</div>
            </div>
          </div>
          <div class="home-gameplay-friend-box">
            <div class="home-gameplay-item">
              <img src="../../steam.jpg">
            </div>
            <div class="home-gameplay-item">
              <img src="../../steam.jpg">
            </div>
            <div class="home-gameplay-item">
              <img src="../../steam.jpg">
            </div>
            <div class="home-gameplay-item">+75</div>
          </div>
        </div>
        <div class="home-gameinfo-frame">
          <div class="home-gameinfo-box">
            <div class="home-gameinfo-item">
              <div class="home-gameinfo-item-title">Recent news</div>
              <div class="home-gameinfo-item-news-box">
                <div class="home-gameinfo-item-news-item">
                  <div class="text-box">
                    <div class="title">The Second CS:GO Major of 2019</div>
                    <div class="time">5 days ago</div>
                  </div>
                  <img src="../../static/images/new001-001.png">
                </div>
                <div class="home-gameinfo-item-news-item">
                  <div class="text-box">
                    <div class="title">The IEM Katowice 2019 Major Begins</div>
                    <div class="time">2 weeks ago</div>
                  </div>
                  <img src="../../static/images/new001-002.png">
                </div>
              </div>
            </div>
            <div class="home-gameinfo-item">
              <div class="home-gameinfo-item-title">Achievements</div>
              <div class="home-achievement-box">
                <div class="home-achievement-press-box">
                  <div class="home-achievement-text">128 out of 167 (76.64%)</div>
                  <div class="home-achievement-background" style="width: 76.64%;"></div>
                </div>
                <div class="home-achievement-list-box">
                  <div class="home-achievement-list-item">
                    <img src="../../static/images/achievement001-001.jpg">
                  </div>
                  <div class="home-achievement-list-item">
                    <img src="../../static/images/achievement001-002.jpg">
                  </div>
                  <div class="home-achievement-list-item">
                    <img src="../../static/images/achievement001-003.jpg">
                  </div>
                  <div class="home-achievement-list-item">
                    <img src="../../static/images/achievement001-004.jpg">
                  </div>
                  <div class="home-achievement-list-item">
                    <img src="../../static/images/achievement001-005.jpg">
                  </div>
                  <div class="home-achievement-list-item">
                    <img src="../../static/images/achievement001-006.jpg">
                  </div>
                  <div class="home-achievement-list-item">
                    <img src="../../static/images/achievement001-007.jpg">
                  </div>
                  <div class="home-achievement-list-item">
                    <img src="../../static/images/achievement001-008.jpg">
                  </div>
                  <div class="home-achievement-list-item">+75</div>
                </div>
              </div>
              <!--朋友在玩-->
              <div class="home-friendsplaying-frame">
                <div class="home-friendsplaying-title">4 friends playing right now</div>
                <div class="home-friendsplaying-box">
                  <div class="home-friendsplaying-item">
                    <img src="../../static/images/head001-001.jpg">
                  </div>
                  <div class="home-friendsplaying-item">
                    <img src="../../static/images/head001-002.jpg">
                  </div>
                  <div class="home-friendsplaying-item">
                    <img src="../../static/images/head001-003.jpg">
                  </div>
                  <div class="home-friendsplaying-item">
                    <img src="../../static/images/head001-004.jpg">
                  </div>
                </div>
              </div>
              <!--朋友在玩-->
              <div class="home-friendsplaying-frame">
                <div class="home-friendsplaying-title">81 more friends who play</div>
                <div class="home-friendsplaying-box">
                  <div class="home-friendsplaying-item">
                    <img src="../../static/images/head001-001.jpg">
                  </div>
                  <div class="home-friendsplaying-item">
                    <img src="../../static/images/head001-002.jpg">
                  </div>
                  <div class="home-friendsplaying-item">
                    <img src="../../static/images/head001-003.jpg">
                  </div>
                  <div class="home-friendsplaying-item">
                    <img src="../../static/images/head001-004.jpg">
                  </div>
                  <div class="home-friendsplaying-item">
                    <img src="../../static/images/head001-005.jpg">
                  </div>
                  <div class="home-friendsplaying-item">
                    <img src="../../static/images/head001-006.jpg">
                  </div>
                  <div class="home-friendsplaying-item">+75</div>
                </div>
              </div>
            </div>
            <div class="home-gameinfo-item">
              <div class="home-gameinfo-item-title">Screenshots</div>
              <div class="home-gameinfo-item-screens-box">
                <div class="home-gameinfo-item-screens-item">
                  <img src="../../static/images/screen001-001.jpg">
                </div>
                <div class="home-gameinfo-item-screens-item">
                  <img src="../../static/images/screen001-002.jpg">
                </div>
                <div class="home-gameinfo-item-screens-item">
                  <img src="../../static/images/screen001-003.jpg">
                </div>
                <div class="home-gameinfo-item-screens-item">
                  <img src="../../static/images/screen001-004.jpg">
                </div>
                <div class="home-gameinfo-item-screens-item">
                  <img src="../../static/images/screen001-005.jpg">
                </div>
                <div class="home-gameinfo-item-screens-item">
                  <img src="../../static/images/screen001-006.jpg">
                </div>
                <div class="home-gameinfo-item-screens-item">
                  <img src="../../static/images/screen001-007.jpg">
                </div>
                <div class="home-gameinfo-item-screens-item">+ 878</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gamenav from './main/nav'
import gameplay from './main/gameplay'
export default {
	name: 'Home',
  components: {
    gamenav,gameplay
  },
  data() {
    return {
      canvasWidth: 0,
      navSelected: 1003,
      play: false,
    };
  },
  methods: {
    // 调整canvas大小
    changeCanvas() {
      let _this = this;
      let bodyWidth =
        document.documentElement.clientWidth <= 1080
          ? 1080
          : document.documentElement.clientWidth;
      _this.canvasWidth = bodyWidth - 240;
      let img = new Image();
      img.src = "../../static/images/wallpaper001.jpg";
      img.onload = function() {
        const canvas = document.getElementById("canvas1");
        const cxt = canvas.getContext("2d");
        cxt.drawImage(img, 0, 0, _this.canvasWidth, 200);
        cxt.stroke();
        _this.$StackBlur.canvasRGBA(canvas, 0, 0, _this.canvasWidth, 200, 4);
      };
      img.onerror = function(res) {
        console.log("error...", res);
      };
    },
    setNav(id) {
      let _this = this;
      _this.navSelected = id;
    },
    // 点击游戏库分类导航
    openCategory(_index, _id) {
      let _this = this;
      _this.navData[_index].showlist = true;
      _this.$set(_this.navData, _index, _this.navData[_index]);
      for (let i = 0; i < _this.navData.length; i++) {
        if (i === _index) {
          _this.$refs["childcontbox" + _id][0].style.height =
            _this.$refs["childcont" + _this.navData[i].id][0].offsetHeight + "px";
        } else {
          _this.$refs["childcontbox" + _this.navData[i].id][0].style.height = "0px";
        }
      }
    },
    getNav() {
      this.$ajax
        .get("/api/gameLibrary")
        .then(res => {
          console.log(res.data.data);
        })
        .catch(response => {
          console.log(response);
        });
    },
		// 开始游戏
		playgame() {
			let _this = this;
			let loading = _this.$loading('游戏正在启动，请稍候');
			setTimeout(()=>{
				_this.play = true;
			},3000)
			setTimeout(()=>{
				loading.show = false;
			},4000)
		},
  },
  mounted() {
    let _this = this;
    window.addEventListener("resize", _this.changeCanvas);
    _this.changeCanvas();
    _this.getNav();
  },
  destroyed() {
    let _this = this;
    window.removeEventListener("resize", _this.changeCanvas);
  }
};
</script>

<style>
.contant {
  transition: height 1s;
}
</style>
