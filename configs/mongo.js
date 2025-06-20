'use strict'

import mongoose from "mongoose"
import { config } from "dotenv"

config()

export const connect = async()=>{
    try {
        mongoose.connection.on('error', () =>{
            console.log('MongoDB | could not be connect to mongodb')
            mongoose.disconnect()
        })

        mongoose.connection.on('connecting', () => console.log('MongoDB | try connecting'))
        mongoose.connection.on('connected', () => console.log('MongoDB | connected to mongodb'))
        mongoose.connection.on('open', () => console.log('MongoDB | connected to dabase'))
        mongoose.connection.on('disconnected', () => console.log('MongoDB | disconnected'))
        mongoose.connection.on('reconnected', () => console.log('MongoDB | reconnected to mongodb'))
        
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.error('Database connection failed ', error)
    }
}