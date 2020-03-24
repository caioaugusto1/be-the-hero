exports.up = function(knex) {

    knex.schema.createTable('ongs', function(table) {
        table.strings('id').primary(); 
        table.strings('name').notNullable(); 
        table.strings('email').notNullable(); 
        table.strings('whatsapp').notNullable(); 
        table.strings('city').notNullable();
        table.strings('uf', 2).notNullable(); 
    }); 
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};