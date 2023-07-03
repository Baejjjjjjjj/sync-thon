require("dotenv").config();
import app from './config/express'

app.listen(4000,()=>console.log('server is open!!!!!!!'));