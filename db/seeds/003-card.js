/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("card").insert(
    [
      { deck_id: 1, front: 'Card 1', back: 'This is the back of card 1.' },
      { deck_id: 1, front: 'Card 2', back: 'This is the back of card 2.' },
      { deck_id: 1, front: 'Card 3', back: 'This is the back of card 3.' },
      { deck_id: 2, front: 'Card 4', back: 'This is the back of card 4.' },
      { deck_id: 2, front: 'Card 5', back: 'This is the back of card 5.' },
      { deck_id: 2, front: 'Card 6', back: 'This is the back of card 6.' },
      { deck_id: 3, front: 'Card 7', back: 'This is the back of card 7.' },
      { deck_id: 3, front: 'Card 8', back: 'This is the back of card 8.' },
      { deck_id: 3, front: 'Card 9', back: 'This is the back of card 9.' },
      { deck_id: 3, front: 'Card 10', back: 'This is the back of card 10.' }
    ]
  );
};
