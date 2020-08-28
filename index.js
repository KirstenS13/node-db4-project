const express = require("express")
const welcomeRouter = require("./routers/welcomeRouter")
const recipesRouter = require("./routers/recipesRouter")

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())

server.use(welcomeRouter)
server.use("/recipes", recipesRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong, please try again later",
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})