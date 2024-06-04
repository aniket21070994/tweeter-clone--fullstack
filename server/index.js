import express from 'express'
import dotenv from "dotenv"
import dbconnect from './config/db.js'
import cookieParser from 'cookie-parser'
import userRouts from "./Routs/userRouts.js"
import tweetRouters from "./Routs/tweetRoutes.js"
const app = express()
dotenv.config()

//middelwares
app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())
app.use(cookieParser())

//url:http:localhost:8080/api/vi/user//register
//connect db to server

dbconnect()
//apis



app.use("/api/vi/user", userRouts)
app.use("/api/vi/tweet", tweetRouters)
//server listenning 
app.listen(process.env.PORT, () => console.log(`server responded at port ${process.env.PORT}`))