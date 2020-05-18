<template>
  <div class="asd">
    <div class="quanti">
      <div class="zhuti">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 hsd">
          <img src="../image/title.png" alt class="img-responsive center-block" />
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 hsds">
            <img src="../image/login.png" class="img-responsive center-block" alt />
            <div
              class="col-xs-6 col-sm-6 col-md-6 col-6 col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 hsds_zhu"
            >
              <div class="form-group">
                <label for="firstname" class="col-sm-1 control-label" style="padding:0px">
                  <span class="iconfont icon-taicangsifa-" style="font-size:22px;color:#494cff"></span>
                </label>
                <div class="col-sm-7" style="padding:0px">
                  <input type="text" class="form-control" placeholder="请输入您手机号" v-model="phone" />
                </div>
                <label for="firstname" class="col-sm-4 control-label" style="padding:0px">
                  <span v-show="show" @click="yanzhengma" class="yanzhengmacss">获取验证码</span>
                  <span v-show="!show" class="count">{{count}} s</span>
                </label>
              </div>
            </div>
            <div
              class="col-xs-6 col-sm-6 col-md-6 col-6 col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 hsds_mima"
            >
              <div class="form-group">
                <label for="firstname" class="col-sm-1 control-label" style="padding:0px">
                  <span class="iconfont icon-mima" style="font-size:22px;color:#494cff"></span>
                </label>
                <div class="col-sm-11" style="padding:0px">
                  <input type="password" class="form-control" placeholder="请输您的验证码" v-model="code" />
                </div>
              </div>
            </div>
            <div
              class="col-xs-6 col-sm-6 col-md-6 col--6 col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 hsds_jizhumima"
            >
              <div class="form-group asda">
                <label
                  for="firstname"
                  class="col-xs-12 col-sm-12 col-md-12 col-12 control-label"
                  style="padding:0px;color:#1d45fc"
                >点击记住密码</label>
              </div>
            </div>
            <div
              class="btn-group hsds_denglu col-xs-6 col-sm-6 col-md-6 col--6 col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3"
            >
              <button type="button" class="btn btn-default hsds_anniu" @click="denglu">登录</button>
            </div>
            <div
              class="col-xs-6 col-sm-6 col-md-6 col--6 col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 hsds_zhuce"
            >
              <div class="form-group asda">
                <label
                  for="firstname"
                  class="col-xs-12 col-sm-12 col-md-12 col-12 control-label"
                  style="padding:0px;color:#000"
                >
                  还没有注册，
                  <span style="color:#1d45fc" @click="lijizhuce">立即注册</span>
                </label>
              </div>
            </div>
          </div>
          <img src="../image/kuang.png" alt class="img-responsive center-block" />
        </div>
      </div>
    </div>
    <div
      class="zhuce col-xs-12 col-sm-12 col-md-12 col-lg-12 zhuce_tandhu"
      @click="guanbi"
      v-show="zhezhaoceng"
    >
      <div v-on:click.stop class="xinxi">
        <img src="../image/zhucebeij.jpg" class="img-responsive center-block" alt />
        <div class="xinxi_title">
          <span @click="gerenzhuce">个人注册</span>
          <span @click="tuanduice">团队注册</span>
        </div>
        <div class="xinxi_neirong col-xs-12 col-sm-12 col-md-12 col-lg-12">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  name: "denglu",
  props: {
    msg: String
  },
  data() {
    return {
      phone: "",
      show: true,
      count: "",
      timer: null,
      code: "",
      zhezhaoceng: false
    };
  },
  computed: {},
  mounted: function() {},
  methods: {
    denglu: function() {
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        Message.error("请输入正确的手机号");
        return;
      }
      if (this.code == "") {
        Message.error("请输入正确的验证码");
        return;
      }
      var url = "https://www.hebkjcg.com/api/User/Login";
      var obj = {
        Phone: this.phone,
        Code: this.code
      };
      this.$baseAPI
        .POST(url, obj)
        .then(response => {
          Message.success(response.PromptMsg);
          if (response.Result == "1") {
            localStorage.setItem(
              "certificate",
              response.RetValue.Authorization
            );
            this.$router.push({ path: "/" });
          }
        })
        .catch(err => {
          Message.error(err.PromptMsg);
        });
    },
    yanzhengma: function() {
      console.log(this.phone);
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        Message.error("请输入正确的手机号");
      } else {
        var url = "https://www.hebkjcg.com/api/BasicData/SendSms";
        var obj = {
          Phone: this.phone
        };
        this.$baseAPI
          .POST(url, obj)
          .then(response => {
            Message.success(response.PromptMsg);
          })
          .catch(err => {
            Message.error(err.PromptMsg);
          });
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        }
      }
    },
    guanbi: function() {
      if (this.zhezhaoceng == false) {
        this.zhezhaoceng = true;
      } else {
        this.zhezhaoceng = false;
      }
    },
    lijizhuce: function() {
      this.zhezhaoceng = true;
    },
    gerenzhuce: function() {
      console.log("123");
    },
    tuanduice: function() {
      console.log("456");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.yanzhengmacss {
  font-size: 12px;
  float: right;
}

.quanti {
  width: 100%;
  height: 100%;
}

.asd {
  width: 100%;
  height: 100%;
}

.zhuti {
  min-width: 1200px;
  width: 100%;
  height: 100%;
  background: url('../image/background1.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
}

.hsd {
  margin: 0 auto;
}

.hsds {
  margin: 0 auto;
  position: relative;
  top: 122px;
}

.hsds_zhu {
  padding: 0 6%;
  position: absolute;
  top: 100px;
  left: -5px;
}

.form-group {
  height: 36px;
  border-bottom: 1px solid #bbbfc0;
}

.control-label {
  height: 34px;
  line-height: 34px;
}

input {
  border: 0;
  webkit-box-shadow: none;
  box-shadow: none;
  background: rgba(225, 225, 225, 0);
}

input:focus {
  border-color: #fff;
  webkit-box-shadow: none;
  box-shadow: none;
}

.hsds_mima {
  padding: 0 6%;
  position: absolute;
  top: 180px;
  left: -5px;
}

.hsds_jizhumima {
  padding: 0 6%;
  position: absolute;
  top: 220px;
  left: -5px;
  text-align: right;
}

.asda {
  border-bottom: 1px solid rgba(225, 225, 225, 0) !important;
}

.hsds_denglu {
  padding: 0 6%;
  position: absolute;
  top: 285px;
  left: -5px;
  text-align: right;
}

.hsds_anniu {
  width: 100%;
  background: #2e79f8;
  background: -moz-linear-gradient(left, #2e79f8 0%, #323bf8 98%);
  background: -webkit-linear-gradient(left, #2e79f8 0%, #323bf8 98%);
  background: linear-gradient(to right, #2e79f8 0%, #323bf8 98%);
  color: #fff;
  border-radius: 70px;
  padding: 10px 12px;
  font-size: 18px;
}

.hsds_zhuce {
  padding: 0 6%;
  position: absolute;
  top: 330px;
  left: -5px;
  text-align: center;
}

.zhuce {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.zhuce_tandhu {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
}

.xinxi {
  margin: 0 auto;
  position: relative;
}

.xinxi_title {
  position: absolute;
  height: 45px;
  width: 100%;
  top: 0px;
  left: 0px;
  background: #1e7dfd;
  background: -moz-linear-gradient(left, #1e7dfd 0%, #2d3bfe 100%);
  background: -webkit-linear-gradient(left, #1e7dfd 0%, #2d3bfe 100%);
  background: linear-gradient(to right, #1e7dfd 0%, #2d3bfe 100%);
}

.xinxi_title span {
  line-height: 45px;
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
}

.xinxi_neirong {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 45px;
  left: 0px;
}

</style>