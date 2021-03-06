const express = require('express')
const app = express()
const router = require('./routes/routes')


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", router)


app.listen(8000, () => {
    console.log("Api Online")
})