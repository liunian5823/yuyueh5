<template>
  <div class="zongti">
    <div class="banner">
      <img src="../image/background.png" class="img-responsive" alt="背景图" />
      <div class="biaoti">
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <img src="../image/logo.png" alt />
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div class="btn-group zhuce">
            <button type="button" class="btn btn-default zhuces" @click="zhuce">注册</button>
          </div>
          <div class="btn-group denglu">
            <router-link to="/denglu">
              <button type="button" class="btn btn-default denglus">登录</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="dibucaidan">copyright © 2009-2017 agsgdjdsdaasdjaksjd</div>
  </div>
</template>

<script>
// import { MessageBox } from "element-ui";
export default {
  name: "xiangqing",
  props: {},
  data() {
    return {
      id: ""
    };
  },
  computed: {},
  mounted: function() {
    this.huoquxiangqing();
  },
  methods: {
    huoquxiangqing() {
      var than = this;
      var a = than.$route.query.id;
      console.log(a);
      than.id = a;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.zongti {
  overflow: hidden;
}

.dibucaidan {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e58fa;
  color: #fff;
}

.banner {
  min-width: 1200px;
  position: relative;
}

.biaoti {
  width: 1200px;
  margin: 0 auto;
  position: absolute;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
}

.denglu {
  float: right;
  margin-right: 15px;
}

.zhuce {
  float: right;
}

.denglus {
  background: #705a81;
  border: 1px solid #fff;
  color: #fff;
  width: 80px;
  padding: 5px 25px;
  border-radius: 15px;
}

.zhuces {
  background: #cebadd;
  border: 1px solid #fff;
  color: #000;
  width: 80px;
  padding: 5px 25px;
  border-radius: 15px;
}
</style>