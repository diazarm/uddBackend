const {Router} = require('express')
const axios = require('axios')

const clientRoute = Router()
const URL = 'https://jsonplaceholder.typicode.com/users'

clientRoute.get( "/client" , async (req, res) => {
    try {
      const response = await axios.get(URL);
      const data = response.data;
      const nombres = data.map(pepito => ({ name: pepito.username }));
      res.status(200).json(nombres);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error al obtener los datos.' });
    }
});



  module.exports = clientRoute;