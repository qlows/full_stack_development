const express = require("express")

const app = express()

app.use(express.static("./statics"))

const SERVER_PORT = 8088

// http://localhost:8088/
app.get("/", (req, res) => {
    res.send("<h1>GET - Welcome to lab4.")
})

// http://localhost:8088/
app.post("/", (req, res) => {
    res.send("<h1>POST - Welcome to lab4.")
})

// lab4
// http://localhost:8088/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS")
})


// Querystring to send values
 app.get("/user", (req, res) => {
    var user = {
        first_name: "Umit",
        last_name: "Kilinc"
    }
    res.setHeader("content-type", "application/json")
    .status(200)
    .send(JSON.stringify(user))
}) 

// Path Parameter to send values
app.post("/user/:fnm/:lnm", (req, res) => {
    const s = req.params
    var first_name = s.fnm
    var last_name = s.lnm

    const newS = {
        first_name,
        last_name,
    }
    res.json(newS)
})

app.listen(SERVER_PORT, () => {
    console.log(`Server Started at http://localhost:${SERVER_PORT}/`)
})