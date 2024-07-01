import express from 'express'
import Router from "./src/routes/routes.js"
import 'dotenv/config'
import config from './config.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", new Router().start())

const PORT = config.PORT

app.listen(process.env.PORT, () => console.log(`Server listening on http://localhost:${process.env.PORT}`));
app.on("Error", (error) => console.log(`Server error: ${error}`))