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
            <button type="button" class="btn btn-default zhuces">注册</button>
          </div>
          <div class="btn-group denglu">
            <router-link to="/denglu">
              <button type="button" class="btn btn-default denglus">登录</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 yuyue">
      <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 yuyues">
        <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 yuyues_title">
          <span>{{neirong.Title}}</span>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 zhuti">
      <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 zhutis">
        <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 zhutis_title">
          <span class="yangsjosa" v-html="neirong.Content">{{neirong.Content}}</span>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 manyidu">
      <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 manyidus">
        <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 manyidus_title">
          <span>非常满意{{manyidus[0]}}%</span>
          <span>很满意{{manyidus[1]}}%</span>
          <span>满意{{manyidus[2]}}%</span>
          <span>不满意{{manyidus[3]}}%</span>
          <span>非常不满意{{manyidus[4]}}%</span>
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
      id: "",
      neirong: "",
      manyidus:"",
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
      //console.log(a);
      than.id = a;
      var seid = localStorage.getItem("certificate");
      var url = "https://www.hebkjcg.com/api/Notice/NoticeGet";
      var obj = {
        NoticeID: a
      };
      than.$baseAPI
        .GET(url, obj, seid)
        .then(response => {
          //console.log(response);
          if (response.Result == "1") {
            than.neirong = response.RetValue;
          }
          than.manyidu();
        })
        .catch(err => {
          console.log(err);
        });
    },
    manyidu:function(){
      var than = this;
      var a = than.$route.query.id;
      //console.log(a);
      than.id = a;
      var seid = localStorage.getItem("certificate");
      var url = "https://www.hebkjcg.com/api/Appointment/GetEvaluateInfo";
      var obj = {
        NoticeID: a
      };
      than.$baseAPI
        .GET(url, obj, seid)
        .then(response => {
          //console.log(response);
           if (response.Result == "1") {
            than.manyidus = response.RetValue;
          }else{
            var a = [0,0,0,0,0]
             than.manyidus = a ;
          }

        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.manyidus_title span{
  width: 200px;
  text-align: center;
  font-size: 26px;
  background: #1682fe;
  background: -moz-linear-gradient(left, #1682fe 0%, #3137fd 100%);
  background: -webkit-linear-gradient(left, #1682fe 0%, #3137fd 100%);
  background: linear-gradient(to right, #1682fe 0%, #3137fd 100%);
  color: #fff;
  padding: 6px 12px;
  border-radius: 45px;
  margin-left 15px;
}
.manyidus_title {
  margin-top: 20px;
  text-indent: 2em;
}

.manyidus_title span {
  line-height: 20x;
  font-size: 14px;
}

.manyidus {
  width: 1200px;
  margin: 0 auto 30px auto;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}


.manyidu{
  padding-bottom 70px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.yangsjosa >>> p {
  width: 100%;
}

.yangsjosa >>> p .image {
  width: 100%;
}

.yangsjosa >>> p span {
  font-size: 16px;
}

.yuyues_title {
  margin-top: 20px;
  text-align: center;
  border-bottom: 1px solid #f1f1f1;
}

.yuyues_title span {
  line-height: 55px;
  font-size: 24px;
}

.yuyues {
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.yuyue {
  margin-top: -35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.zhutis_title {
  margin-top: 20px;
  text-indent: 2em;
}

.zhutis_title span {
  line-height: 20x;
  font-size: 12px;
}

.zhutis {
  width: 1200px;
  margin: 0 auto 30px auto;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.zhuti {
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

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