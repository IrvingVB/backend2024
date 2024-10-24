const {request , response} =  require('express');

const getMessage= (req = request, res= response) => {
    res.send('hola Mundo');

}

module.exports={getMessage}; 