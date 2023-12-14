const mongoose=require('mongoose');
const dotenv=require("dotenv");
// const mongoUri='mongodb+srv://GoFood:GoFood@cluster0.rzuocgs.mongodb.net/GoFood?retryWrites=true&w=majority'
dotenv.config({path:'./config.env'});
const mongoUri=process.env.DATABASE



const mongodb=async()=>{
    await mongoose.connect(mongoUri,{useNewUrlParser:true,useUnifiedTopology:true},async(err,result)=>{
        if(err) console.log("---",err)
        else

        {
        console.log("connected databse")
        const fetched_data=await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err,data){
            const foodCategory=await mongoose.connection.db.collection("food_category");
            foodCategory.find({}).toArray(function(err,catData){
              if(err) console.log(err);
              else{
                global.food_items=data;
                global.foodCategory=catData;
              }
            })
    
            //  if(err)console.log(err);
            // else{
            //      global.food_items=data;
            //      //console.log(global.food_items); 
            // }
        }); 
        }
    }) 
}




module.exports=mongodb;