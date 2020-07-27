const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          name: faker.lorem.words(),
          description: faker.lorem.paragraphs(),
          price: faker.commerce.price(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.lorem.words(),
          description: faker.lorem.paragraphs(),
          price: faker.commerce.price(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.lorem.words(),
          description: faker.lorem.paragraphs(),
          price: faker.commerce.price(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.lorem.words(),
          description: faker.lorem.paragraphs(),
          price: faker.commerce.price(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.lorem.words(),
          description: faker.lorem.paragraphs(),
          price: faker.commerce.price(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.lorem.words(),
          description: faker.lorem.paragraphs(),
          price: faker.commerce.price(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.lorem.words(),
          description: faker.lorem.paragraphs(),
          price: faker.commerce.price(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.lorem.words(),
          description: faker.lorem.paragraphs(),
          price: faker.commerce.price(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  },
};
