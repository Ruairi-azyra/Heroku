const express = require("express") 
const app = express()

app.get("/", function(res,req)
{
    res,send("Application Working")
})

app.listen(process.env.PORT || 5000 )