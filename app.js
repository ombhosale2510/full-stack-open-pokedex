const express = require('express')
const app = express()

// get the port from env variable
const port = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
