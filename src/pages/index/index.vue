<template>
  <div>
    <i-row>
      <i-col span="24" i-class="col-f">
        <select-area></select-area>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="24" i-class="col-s"></i-col>
    </i-row>
  </div>
</template>

<script>

    import SelectArea from "../../components/select-area";
    export default {
      name: "index",
      components: {SelectArea},
      data(){
        return{
        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  >>> .col-f{
    height: 200px;
    background-color: #cccccc;
  }
  >>> .col-s{
   height: 400px;
   background: #218c78;
  }
</style>
