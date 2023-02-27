const db = require('../database/models');


const dietsController = {
    list:  async function(req,res){
        try{
            let dietas = await db.Diet.findAll();
            console.log(dietas);
            res.send(dietas)
        }
        catch(e){
            res.status(404).send(e.message)
        }
    }
    
}

module.exports = dietsController;