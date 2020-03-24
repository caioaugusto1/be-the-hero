const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        
        const { page = 1 } = request.query;

        const count = await connection('ongs').count();

        const ongs = await connection('ongs').limit(5)
        .join('ongs', 'ongs_id', '=', 'incidents.ong_id')
        .offset((page - 1) * 5)
        .select(['incidents.*', 'ongs.xname', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);
    
        return response.json(ongs);
    }, 

    async create(request, response){

        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id, 
            name, 
            email, 
            whatsapp, 
            city, 
            uf
        })
    }
};