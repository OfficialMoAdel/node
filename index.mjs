import express from "express";
import os from "os";

const app = express();
const PORT = 3000

app.get("/", (req, res) => {
 const massage = `Hello from ${os.hostname()}: version 1.2.0`
 res.send(massage)
})
app.listen(PORT, () => {
 console.log(`webserver is listening on port ${PORT}`)
    console.log(os.hostname())
})
