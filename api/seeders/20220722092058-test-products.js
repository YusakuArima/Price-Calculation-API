'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();
    return queryInterface.bulkInsert('Products', [
      { productName: 'T-shirt', id: '1', price: 4800},
      { productName: 'Jacket', id: '2', price: 19800},
      { productName: 'Pants', id: '3', price: 9800},

    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
