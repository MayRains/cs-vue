<template>
  <div>
      <el-table :data="info" stripe border style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="images" label="images">
                <template slot-scope="scope">
                  <img :src="'data:image/png;base64,'+scope.row.images" width="100" height="100" alt />
                </template>
            </el-table-column>
           
          </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: []
    };
  },
  methods: {
    async loadData() {
      const data = await this.$http.get("/class/getimage");
      console.log(data.data);
      let arr = [];
      for (let i in data.data) {
        arr.push(data.data[i]);
      }
      this.info = arr;
      console.log(arr);
    }
  },
  created() {
    this.loadData();
  }
};
</script>