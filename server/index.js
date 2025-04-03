const express = require('express')
const cors = require('cors')
const app = express()

// ✅ Import and use routes
const phoneRoutes = require('../server/routes/phoneRoutes')

app.use(express.json())
app.use(cors())

const mongoose = require('mongoose')

const DB = 'mongodb+srv://hamzaicp54:fQ8HvZCGcSXtZDmN@cluster0.8xrj1yr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})

// adjust path if needed
app.use('/api', phoneRoutes)



const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})


