/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.alterTable("card_deck", function (table) {
    table.string('audio', 400);
    table.renameColumn('card_front', 'card_title');
    table.renameColumn('card_back', 'card_body')
  })
};
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.alterTable("card_deck", function (table) {
        table.dropcolumn("audio");
        table.renameColumn('card_title', 'card_front');
        table.renameColumn('card_body', 'card_back')
    
    })
  };
  