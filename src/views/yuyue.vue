<template>
  <div @touchmove.prevent class="asd" @click="asdwa">
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 zhuyao" v-on:click.stop="doThis">
      <img src="../image/registration.jpg" alt class="img-responsive center-block" />
      <div class="xuanze">
        <div class="block">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </div>
        <el-form ref="form" :model="form" class="timesss">
          <el-form-item>
            <el-select v-model="form.daw" placeholder="请选择预约">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="queding">
          <div class="btn-group anniu">
            <button type="button" class="btn btn-default annius" @click="queding">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Message } from "element-ui";
export default {
  name: "yuyeu",
  props: {
    
  },
  data() {
    return {
      form: {
        daw: ""
      },
      value1: ""
    };
  },
  computed: {},
  mounted: function() {},
  methods: {
    queding: function() {
      this.$emit("fun", false);
    },
    asdwa: function() {
      this.$emit("fun", false);
    },
    doThis: function() {},
    huoqushijian: function(e) {
      var than = this;
      var seid = localStorage.getItem("certificate");

      var url = "https://www.hebkjcg.com/api/Notice/NoticeGet";
      var obj = {
        NoticeID: e
      };
      than.$baseAPI
        .GET(url, obj, seid)
        .then(response => {
          console.log(response);
          //   if (response.Result == "1") {

          //   }
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
.asd {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.zhuyao {
  margin: 0 auto;
}

.xuanze {
  width: 100%;
  background: #fff;
}

.block {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}

.timesss {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}

.el-form-item {
  margin-bottom: 0px !important;
}

.queding {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}

.anniu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.annius {
  width: 70%;
  background: #2e79f8;
  background: -moz-linear-gradient(left, #2e79f8 0%, #323bf8 98%);
  background: -webkit-linear-gradient(left, #2e79f8 0%, #323bf8 98%);
  background: linear-gradient(to right, #2e79f8 0%, #323bf8 98%);
  color: #fff;
  border-radius: 0px;
}
</style>