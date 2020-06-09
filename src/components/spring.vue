<template>
    <div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            info:[]
        };
    },
    methods: {
        async loadData(){
            const data = await this.$http.get('/getmanager');
            console.log(data);
            
        }
    },
     created() {
    this.loadData();
  }
}
</script>