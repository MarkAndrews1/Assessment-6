const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json())

app.post('/', async function(req, res, next) {
  try {
    let results = await Promise.all(req.body.developers.map(async (dev)=> {
      let res = await axios.get(`https://api.github.com/users/${dev}`)
      return {name: res.data.name, bio: res.data.bio}
    }))

    return res.json(results)
  } catch (err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000')
});
