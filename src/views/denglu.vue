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
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            v-if="zhucepd === '1'"
          >
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="地区" prop="city">
              <el-input v-model="ruleForm.city"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="所属领域" prop="territory">
              <el-select v-model="ruleForm.territory" placeholder="请选择所属领域">
                <el-option
                  v-for="(item,index) in crowds"
                  :key="index"
                  :label="item.FieldName"
                  :value="item.FieldID"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所属人群" prop="crowd">
              <el-select v-model="ruleForm.crowd" placeholder="请选所属人群">
                <el-option
                  v-for="(item,index) in territorys"
                  :key="index"
                  :label="item.PeopleName"
                  :value="item.PeopleID"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="手机号" prop="phones">
              <el-input v-model="ruleForm.phones" class="shuruk"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="codes">
              <el-input v-model="ruleForm.codes"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForms('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm()">发送验证码</el-button>
            </el-form-item>
          </el-form>
          <!-- --------------------------------------------------------------------------------- -->
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            v-else
          >
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="地区" prop="city">
              <el-input v-model="ruleForm.city"></el-input>
            </el-form-item>
            <el-form-item label="总人数" prop="age">
              <el-input v-model="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phones">
              <el-input v-model="ruleForm.phones" class="shuruk"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="codes">
              <el-input v-model="ruleForm.codes"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm()">发送验证码</el-button>
            </el-form-item>
          </el-form>
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
      zhezhaoceng: false,
      territorys: "",
      crowds: "",
      citys: "",
      zhucepd: "1",
      ruleForm: {
        name: "",
        city: "",
        age: "",
        email: "",
        territory: "",
        crowd: "",
        phones: "",
        codes: "",
        resource: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入您的姓名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        city: [
          { required: true, message: "请输入城市名称", trigger: "blur" },
          { min: 2, max: 15, message: "长度在 2 到 15 个字符", trigger: "blur" }
        ],
        age: [
          { required: true, message: "请输入您的年龄", trigger: "blur" },
          { min: 1, max: 3, message: "长度在 1 到 3 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入您的邮箱", trigger: "blur" },
          { min: 7, max: 50, message: "长度错误", trigger: "blur" }
        ],
        phones: [
          { required: true, message: "请输入您的手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确手机号", trigger: "blur" }
        ],
        codes: [
          { required: true, message: "请输入您的验证码", trigger: "blur" },
          { min: 6, max: 6, message: "请输入您的验证码", trigger: "blur" }
        ],
        resource: [
          { required: true, message: "请选择您的性别", trigger: "change" }
        ],
        territory: [{ required: true, message: "所属领域", trigger: "change" }],
        crowd: [{ required: true, message: "所属人群", trigger: "change" }]
      }
    };
  },
  computed: {},
  mounted: function() {
    this.huoqurenque();
  },
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
      //console.log(this.phone);
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
      this.zhucepd = "1";
    },
    tuanduice: function() {
      console.log("456");
      this.zhucepd = "2";
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var Gender = "";

          if (this.$refs[formName].fields[3].fieldValue == "男") {
            Gender = "1";
          } else {
            Gender = "0";
          }
          var Area = "";
          for (var i = 0; i < this.citys.length; i++) {
            if (
              this.citys[i].AreaName.search(
                this.$refs[formName].fields[1].fieldValue
              ) != -1
            ) {
              Area = this.citys[i].AreaID;
              // console.log(this.citys[i].AreaID);
            } else {
              // 130100  默认id
              Area = "130100";
            }
          }
          console.log(Gender, Area);
          var url = "https://www.hebkjcg.com/api/User/Register";
          var obj = {
            Phone: this.$refs[formName].fields[7].fieldValue,
            Code: this.$refs[formName].fields[8].fieldValue,
            Name: this.$refs[formName].fields[0].fieldValue,
            Area: Area,
            Type: "1",
            Age: this.$refs[formName].fields[2].fieldValue,
            Gender: Gender,
            EMail: this.$refs[formName].fields[4].fieldValue,
            FieldID: this.$refs[formName].fields[5].fieldValue,
            PeopleID: this.$refs[formName].fields[6].fieldValue
          };
          this.$baseAPI
            .POST(url, obj)
            .then(response => {
              Message.success(response.PromptMsg);
            })
            .catch(err => {
              Message.error(err.PromptMsg);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitForms(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var Gender = "";

          if (this.$refs[formName].fields[3].fieldValue == "男") {
            Gender = "1";
          } else {
            Gender = "0";
          }
          var Area = "";
          for (var i = 0; i < this.citys.length; i++) {
            if (
              this.citys[i].AreaName.search(
                this.$refs[formName].fields[1].fieldValue
              ) != -1
            ) {
              Area = this.citys[i].AreaID;
              // console.log(this.citys[i].AreaID);
            } else {
              // 130100  默认id
              Area = "130100";
            }
          }
          console.log(Gender, Area);
          var url = "https://www.hebkjcg.com/api/User/Register";
          var obj = {
            Phone: this.$refs[formName].fields[7].fieldValue,
            Code: this.$refs[formName].fields[8].fieldValue,
            Name: this.$refs[formName].fields[0].fieldValue,
            Area: Area,
            Type: "2",
            Age: this.$refs[formName].fields[2].fieldValue,
         

          };
          this.$baseAPI
            .POST(url, obj)
            .then(response => {
              Message.success(response.PromptMsg);
            })
            .catch(err => {
              Message.error(err.PromptMsg);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      var than = this;
      if (!/^1[3456789]\d{9}$/.test(than.ruleForm.phones)) {
        Message.error("请输入正确的手机号");
      } else {
        var url = "https://www.hebkjcg.com/api/BasicData/SendSms";
        var obj = {
          Phone: than.ruleForm.phones
        };
        this.$baseAPI
          .POST(url, obj)
          .then(response => {
            Message.success(response.PromptMsg);
          })
          .catch(err => {
            Message.error(err.PromptMsg);
          });
      }
    },
    huoqurenque: function() {
      var than = this;
      var url = "https://www.hebkjcg.com/api/BasicData/People";
      var obj = {};
      this.$baseAPI
        .GET(url, obj)
        .then(response => {
          console.log(response.PromptMsg);
          than.territorys = response.RetValue;
          than.huoqulingyu();
        })
        .catch(err => {
          Message.error(err.PromptMsg);
        });
    },
    huoqulingyu: function() {
      var than = this;
      var url = "https://www.hebkjcg.com/api/BasicData/Field";
      var obj = {};
      this.$baseAPI
        .GET(url, obj)
        .then(response => {
          console.log(response.PromptMsg);
          than.crowds = response.RetValue;
          than.huoqudiqu();
        })
        .catch(err => {
          Message.error(err.PromptMsg);
        });
    },
    huoqudiqu: function() {
      var than = this;
      var url = "https://www.hebkjcg.com/api/BasicData/Area";
      var obj = {};
      this.$baseAPI
        .GET(url, obj)
        .then(response => {
          console.log(response.PromptMsg);
          than.citys = response.RetValue;
        })
        .catch(err => {
          Message.error(err.PromptMsg);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.shuruk {
  position: relative;
}

.el-form-item {
  width: 80%;
  margin: 20px 0px 20px 25px;
}

.el-select {
  width: 100%;
}

.el-input__inner {
  display: none;
}

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