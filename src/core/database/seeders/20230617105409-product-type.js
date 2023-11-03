'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductTypes', [
      {
        name: 'Lenders\' Lite',
        interest_rate: 11,
        duration: 3,
        minimum_amount: 100000,
        maximum_amount: 999999,
        status: 'active',
        product: 'investment',
        wht_rate: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lenders\' D-Lite',
        interest_rate: 14,
        duration: 6,
        minimum_amount: 1000000,
        maximum_amount: 9999999,
        status: 'active',
        product: 'investment',
        wht_rate: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lenders\' E-Lite',
        interest_rate: 15.5,
        duration: 9,
        minimum_amount: 10000000,
        maximum_amount: 49999999,
        status: 'active',
        product: 'investment',
        wht_rate: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lenders\' Platinum',
        interest_rate: 16.5,
        duration: 12,
        minimum_amount: 50000000,
        maximum_amount: 1000000000000,
        status: 'active',
        product: 'investment',
        wht_rate: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Novice',
        interest_rate: 8,
        duration: 3,
        minimum_amount: 1000,
        maximum_amount: 9999,
        status: 'active',
        product: 'target_contribution',
        wht_rate: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Starter',
        interest_rate: 16,
        duration: 3,
        minimum_amount: 10000,
        maximum_amount: 100000,
        status: 'active',
        product: 'target_contribution',
        wht_rate: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Progress',
        interest_rate: 16,
        duration: 3,
        minimum_amount: 100001,
        maximum_amount: 250000,
        status: 'active',
        product: 'target_contribution',
        wht_rate: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Accelerate',
        interest_rate: 16,
        duration: 3,
        minimum_amount: 250001,
        maximum_amount: 10000000,
        status: 'active',
        product: 'target_contribution',
        wht_rate: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductTypes', null, {});
  }
};
