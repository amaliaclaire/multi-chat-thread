exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()

    .then(function () {
      return knex('tickets').del()
    })
};
