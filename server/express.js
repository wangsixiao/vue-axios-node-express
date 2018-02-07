var express = require('express')
var app = express() 
//解决跨域  
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*")  
    res.header("Access-Control-Allow-Headers", "X-Requested-With") 
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS") 
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
})  
  
app.get('/getList.json',function(req,res){  
    //返回的json对象  
    var obj = {  
        code: 0,  
        list: [  
            {name: '苹果'},  
            {name: '香蕉'},  
            {name: '梨子'}  
        ]  
    }
    res.jsonp(obj) 
});  
  
//启动服务，监听一个端口，不要和页面的端口  
app.listen(3030);  