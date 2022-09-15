const express=require("express");
const { getDate,getDay } = require("./date");
const app=express()


app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))

const items=['Buy food','Cook food','Eat food'];
const clgItems=[];

app.get("/",(req,res)=>{
    res.render("list",{listTitle:getDate(), items});
});

app.post("/",(req,res)=>{
    let list=req.body.list;
    console.log(list);
    let item=req.body.newItem;
    if(list==="College")
    {
        clgItems.push(item);
        res.redirect("/college");
    }    
    else
    {
        items.push(item);
        res.redirect("/");
    }    
    
});

app.get("/college",(req,res)=>{
    res.render("list",{listTitle:"College Tasks",items:clgItems});
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.listen(3000,function(){
    console.log("Server running!!!")
});