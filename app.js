const express=require("express")
const app=express()

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
let items=['Buy food','Cook food','Eat food'];
let clgItems=[];
app.get("/",(req,res)=>{
    let today=new Date();
     let options={
        weekday:"long",
        day:"numeric",
        month:"long"
     };

     let day=today.toLocaleDateString("en-US",options);

     res.render("list",{listTitle:day, items
     });
});

app.post("/",(req,res)=>{
    let list=req.body.list;
    console.log(list);
    let item=req.body.newItem;
    if(list==="College")
    {
        clgItems.push(item);
        res.redirect("/College");
    }    
    else
    {
        items.push(item);
        res.redirect("/");
    }    
    
});

app.get("/College",(req,res)=>{
    res.render("list",{listTitle:"College Tasks",items:clgItems});
})

app.get("/About",(req,res)=>{
    res.render("about");
})

app.listen(3000,function(){
    console.log("Server running!!!")
});