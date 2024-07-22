const express = require("express")
const cors = require("cors")
const { default: axios } = require("axios")

const app = express()

app.use(express.json())
app.use(cors({ origin: true }))

app.post("/auth", async (req, res) => {
  const { username } = req.body

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username,
        secret: username,
        first_name: username,
      },
      {
        headers: { "private-key": "22eec768-0a53-4403-b1b1-11181a19e7db" },
      }
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
})

app.listen(3001, console.log("Server started"))
