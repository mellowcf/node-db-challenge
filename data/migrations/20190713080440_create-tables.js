exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
      tbl.increments();
      tbl.text('project_name', 128)
        .unique()
        .notNullable();
      tbl.text('project_description')
      
      tbl.boolean('project_completed')
      
      .defaultTo(false)
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.integer('project_id')
        
        .unsigned()
        
        .references('id')
        .inTable('project')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.text('task_notes')
      
      tbl.text('task_description', 128)
        
        .notNullable();
      
      tbl.boolean('task_completed')
      .notNullable()
      .defaultTo(false)
     
      
    })

    .createTable('resource', tbl => {
      tbl.increments();
      tbl.text('resource_name')
        
        .notNullable();
      tbl.text('resource_description')
       
    })
    
    .createTable('project_resource', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
       
        .inTable('project')
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        
        .inTable('resource')
    
      
      tbl.primary(['project_id', 'resource_id']);
    });
    
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
    .dropTableIfExists('tasks')
};

