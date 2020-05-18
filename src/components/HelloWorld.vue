<template>
  <div class="zongti">
    <yuyue v-show="yuyues" v-on:fun="change" ref="child"></yuyue>
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
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 tongzhi">
        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 tongzhi_biaoi" style="padding:0px">
          <img src="../image/tongzhi-.png" alt="小喇叭" />
          <span style="padding-left:10px">紧急通知</span>
        </div>
        <div
          class="col-xs-6 col-sm-6 col-md-6 col-lg-6"
          style="padding:0px;display: flex;justify-content: center;align-items: center;"
        >
          <ul>
            <li>野生动物保护工作事关生态平衡和生态文明建设，责任重大</li>
          </ul>
        </div>
        <div
          class="col-xs-5 col-sm-5 col-md-5 col-lg-5"
          style="padding:0p; display: flex;justify-content: center;align-items: center;"
        >
          <ul>
            <li>野生动物保护工作事关生态平衡和生态文明建设，责任重大</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 yuyue">
      <div class="yuyues">
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div class="yygg">
            <div class="yygg_top">
              <img src="../image/yygg.png" alt />
              <div class="yygg_top_xian"></div>
            </div>
            <div style="margin-top:30px">
              <div
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12 yygg_neirong"
                v-for="(item,index) in yygg"
                :key="index"
              >
                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" @click="xiangqing(item.NoticeID)">
                  <span class="iconfont icon-jiantou" style="color:#1e58fa"></span>
                  <span class="yygg_neirong_name">{{item.Title}}</span>

                  <span
                    class="yygg_neirong_shjian"
                  >活动日期：{{item.PersonalStartDate}}~{{item.PersonalEndDate}}</span>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 yygg_neirong_anniu">
                  <div class="btn-group">
                    <button type="button" class="btn btn-default" @click="yuyue(item.NoticeID)" >预约</button>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 yygg_neirong dibudaohang">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage3"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 yuyues_left">
          <img src="../image/bg.png" alt class="yyxz" />
          <img src="../image/yyxz.png" alt class="yyxzt" />
          <span></span>
          <vue-seamless-scroll :class-option="optionHover" class="seamless-warp">
            <ul class="item">
              <li
                v-for="(item,index) in yyxz"
                :key="index"
                class="jiti"
                @click="xianshixiangq(item.Title)"
              >{{index + 1}}、{{item.Title}}</li>
            </ul>
          </vue-seamless-scroll>
        </div>
      </div>
    </div>
    <!-- ------------------------------------------------------------------------------------------- -->
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 yuyue" style="padding-bottom:60px">
      <div class="yuyues">
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div class="yygg">
            <div class="yygg_top">
              <img src="../image/lsgg.png" alt />
              <div class="yygg_top_xian"></div>
            </div>
            <div style="margin-top:30px">
              <div
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12 yygg_neirong"
                v-for="(item,index) in lsgg"
                :key="index"
              >
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <span class="iconfont icon-jiantou" style="color:#1e58fa"></span>
                  <span class="yygg_neirong_name">{{item.Title}}</span>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 yygg_neirong_anniu">
                  <span
                    class="yygg_neirong_shjian"
                  >活动日期：{{item.PersonalStartDate}}~{{item.PersonalEndDate}}</span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 yygg_neirong dibudaohang">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 yuyues_left">
          <img src="../image/back.jpg" alt class="yyxz" />
        </div>
      </div>
    </div>
    <!-- -------------------------------------------------------------- -->
    <div class="dibucaidan">
        copyright © 2009-2017 agsgdjdsdaasdjaksjd
    </div>
    
  </div>
  
</template>

<script>
import yuyue from '../views/yuyue.vue'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    yuyue
  },
  data() {
    return {
      currentPage3: 1, //初始页
      pagesize: 10, //    每页的数据
      userList: [],
      yygg: "",
      lsgg: "",
      yyxz: [],
      jstz: "",
      yuyues:false,
      id:'0'
    };
  },
  computed: {
    optionHover() {
      return {
        hoverStop: true, //是否悬停
        singleHeight: 25, // 单行停顿
        waitTime: 0, //单行停顿时间
        limitMoveNum: 10
      };
    }
  },
  mounted: function() {
    this.sendGetByObj();
  },
  methods: {
    // denglu() {
    //   console.log("点击进入登录");
    // },
    zhuce() {
      console.log("点击进入注册");
    },
    xianshixiangq(e) {
      console.log(e);
    },
    sendGetByObj() {
      var url = "https://www.hebkjcg.com/api/Notice/NoticeList";
      var obj = {
        type: "1",
        limit: "4",
        ExpireState: "0",
        jstz: ""
      };
      this.$baseAPI
        .GET(url, obj)
        .then(response => {
          console.log(response.RetValue.data);
          if (response.Result == "1") {
            this.yygg = response.RetValue.data;
            this.sendGetByObj1();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendGetByObj1() {
      var url = "https://www.hebkjcg.com/api/Notice/NoticeList";
      var obj = {
        type: "2"
      };
      this.$baseAPI
        .GET(url, obj)
        .then(response => {
          console.log(response.RetValue.data);
          if (response.Result == "1") {
            this.yyxz = response.RetValue.data;
            this.sendGetByObj2();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendGetByObj2() {
      var url = "https://www.hebkjcg.com/api/Notice/NoticeList";
      var obj = {
        type: "3"
      };
      this.$baseAPI
        .GET(url, obj)
        .then(response => {
          console.log(response.RetValue.data);
          if (response.Result == "1") {
            this.jstz = response.RetValue.data;
            this.sendGetByObj3();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendGetByObj3() {
      var url = "https://www.hebkjcg.com/api/Notice/NoticeList";
      var obj = {
        type: "1",
        limit: "4",
        ExpireState: "1"
      };
      this.$baseAPI
        .GET(url, obj)
        .then(response => {
          console.log(response.RetValue.data);
          if (response.Result == "1") {
            this.lsgg = response.RetValue.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage3) {
      this.currentPage3 = currentPage3;
      console.log(this.currentPage3); //点击第几页
    },
    handleUserList() {
      //这是从本地请求的数据接口，
      this.userList = 1;
    },
    yuyue:function(e){
      console.log(e)
      if(this.yuyues == false){
        this.yuyues = true
         this.$refs.child.huoqushijian(e)
      }else{
         this.yuyues = false
      }
      
    },
    change:function(data){
      console.log(data)
      this.yuyues = data
    
    },
    xiangqing:function(e){
      console.log(e)
      this.$router.push({name:"xiangqing",query: { id: e}})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.zongti{
  overflow:hidden
}
.dibucaidan{
  height 70px;
  width 100%
  display: flex;
  justify-content: center;
  align-items: center;
  background #1e58fa;
  color #fff;
}

.dibudaohang {
  position: absolute;
  left: 0px;
  bottom: 30px;
}

.yygg_neirong_anniu {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.yygg_neirong_shjian {
  display: block;
  line-height: 30px;
  padding-left: 28px;
}

.yygg_neirong_name {
  line-height: 30px;
  color: #1e58fa;
  margin-left: 10px;
  font-size: 18px;
}

.yygg_neirong {
  margin-top: 20px;
  padding: 0 40px;
}

.yygg_top_xian {
  margin-top: -5px;
  width: 106px;
  border-bottom: 3px solid #1e58fa;
}

.yygg_top {
  height: 59px;
  line-height: 52px;
  background: #ffffff; /* Old browsers */
  background: -moz-linear-gradient(top, #ffffff 0%, #f5f5f7 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #ffffff 0%, #f5f5f7 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f7 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  padding-left: 20px;
}

.yygg {
  width: 100%;
  height: 470px;
  -moz-box-shadow: 0px 0px 20px #DEDEDE;
  -webkit-box-shadow: 0px 0px 20px #DEDEDE;
  box-shadow: 0px 0px 20px #DEDEDE;
  position: relative;
}

.jiti {
  font-size: 16px;
  line-height: 33px;
}

.seamless-warp {
  width: 85%;
  position: absolute;
  top: 60px;
  left: 26px;
  height: 80%;
  overflow: hidden;
  color: #fff;
}

ul li {
  list-style-type: none;
}

ul {
  padding: 0px;
}

.yuyues_left span {
  position: absolute;
  top: 30px;
  left: 26px;
  border-bottom: 3px solid #fff;
  width: 110px;
  height: 20px;
}

.yyxzt {
  position: absolute;
  top: 12px;
  left: 26px;
}

.yuyues_left {
  position: relative;
}

.yyxz {
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  -moz-box-shadow: 0px 0px 20px #DEDEDE;
  -webkit-box-shadow: 0px 0px 20px #DEDEDE;
  box-shadow: 0px 0px 20px #DEDEDE;
}

.yuyues {
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  -moz-box-shadow: 0px 0px 10px #DEDEDE;
  -webkit-box-shadow: 0px 0px 10px #DEDEDE;
  box-shadow: 0px 0px 10px #DEDEDE;
}

.yuyue {
  margin-top: 35px;
}

.tongzhi_biaoi {
}

ul {
  margin-top: 14px;
  margin-bottom: 14px;
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

.tongzhi {
  width: 1200px;
  margin: 0 auto;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  background: #fff;
  -moz-box-shadow: 0px 10px 12px #DEDEDE;
  -webkit-box-shadow: 0px 10px 12px #DEDEDE;
  box-shadow: 0px 10px 12px #DEDEDE;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>