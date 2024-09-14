import express from 'express'
const app = express();
app.use(express.static('dist'))
app.get('/api/jokes',(req , res)=>{
    const jokes = [
        {id:1 , joke:"Why was the math book sad? Because it had too many problem"}
        ,{id:2 , joke:"Why did the scarecrow win an award? Because he was outstanding in his field"},
        {id:3 , joke:"What do you call a fake noodle? An impasta "},
        {id:4 , joke:"Why did the bicycle fall over? Because it was two-t"}
        ,{id:5 , joke:"Why did the banana go to the doctor? He wasn 't peeling well"}
        ]
        res.json(jokes)
        })
        
const Port = process.env.PORT || 3000;
app.listen(Port , ()=>{
    console.log(`server is running on ${Port}`)

})
