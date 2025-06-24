const express = require("express")


const app = express();


const port  = 3001

const host = '0.0.0.0' 



app.get("/", async (req, res) => {
	return res.json({msg: "Welcome to the server"})
})

app.get("/api/wait", async (req, res) => {
	const ms= 15000
	await new Promise(resolve =>  setTimeout(resolve, ms))
	return res.json({msg : "Waited for 15000ms"})
})


app.listen(port, host, () => {
	console.log("LIstening to port: ", port)
})