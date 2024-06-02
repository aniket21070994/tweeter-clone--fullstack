import express from 'express'
import dotenv from "dotenv"
import dbconnect from './config/db.js'
const app=express()
dotenv.config()

dbconnect()
app.listen(process.env.PORT,()=>console.log(`server responded at port ${process.env.PORT}`))