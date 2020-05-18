<template>
  <div>
      {{id}}
  </div>
</template>

<script>
// import { MessageBox } from "element-ui";
export default {
  name: "xiangqing",
  props: {},
  data() {
    return {
      id:"",
    };
  },
  computed: {},
  mounted: function() {
      this.huoquxiangqing()
  },
  methods: {
      huoquxiangqing(){
          var than = this;
          var a = than.$route.query.id
          console.log(a)
          than.id = a;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>