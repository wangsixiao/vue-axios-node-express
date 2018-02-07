<template>
    <div>
        水果：
        <ul>
            <li v-for="i in list">
                {{i.name}}
            </li>
        </ul>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                list:[]
            }
        },
        mounted:function(){  
            var _this = this;  
            this.$http
            .get('http://localhost:3030/getList.json')
            .then(function(result){  
                debugger
                if(result.body.code == 0){  
                    _this.list = result.body.list;  
                }  
            });  
            // axios
            // .get('http://localhost:3030/getList.json')
            // .then(function(response){
            //     if(JSON.parse(response.request.response).code == 0){ 
            //         _this.list = JSON.parse(response.request.response).list;  
            //     }  
            // });  
           
        }  
    }
</script>