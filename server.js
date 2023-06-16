const app = require('./app')

const port = process.env.PORT || 3000

app.get("/",(req,res) => {
    res.sendFile("index.html");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})