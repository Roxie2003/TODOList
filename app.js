const express=require("express")
const app=express()

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
let items=['Buy food','Cook food','Eat food'];

app.get("/",(req,res)=>{
    let today=new Date();
     let options={
        weekday:"long",
        day:"numeric",
        month:"long"
     };

     let day=today.toLocaleDateString("en-US",options);

     res.render("list",{
        kindOfDay:day,
        items
     });
});

app.post("/",(req,res)=>{
    items.push(req.body.newItem);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("Server running!!!")
});