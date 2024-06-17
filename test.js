const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'localhost:5003/stell/gettoken',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
