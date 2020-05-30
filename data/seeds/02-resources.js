exports.seed = function(knex) {
    return knex('resource').insert([
      {resource_name: 'TI-98 Calculator',
      resource_description: "A nerd's best tool"
    },
    {resource_name: 'Computer',
      resource_description: "Arguably as important to a nerd as his/her calculator"
    }
    ]);
  };
  

