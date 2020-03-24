const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){

        const [ count ] = await connection('incidents').count();

        const ongs = await connection('incidents').limit(5)
        .offset((page - 1) * 5)
        .select('*');
        
        return response.json(incidents);

    }, 

    async create(request, response){

        const ong_id = request.headers.authorization;

        const { title, description, value } = request.body;

        const [id] = await connection('incidents').insert({
            title, 
            description, 
            value, 
            ong_id
        });

        return response.json({id});
    },

    async delete(request, response){
        const { id } = request.params;
        const { ong_id } =  request.headers.authorization;

        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if(ong_id != incident.ong_id){
            return response.status(401).json({ error: 'Operation not permited.'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    } 
};