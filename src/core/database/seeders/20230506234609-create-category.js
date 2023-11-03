'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Food',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Entertainment',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shopping',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Children',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rent/Housing',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pay of Debt',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pay Bills/Fees',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Events',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Birthday',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Travel/Vacations',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gadgets',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Education',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'School Fees',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Healthcare',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Part/Leisure/Chills',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Retirement',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Getting Married',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Healthcare',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Waste Disposal',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Emergency Fund',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Transportation',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Car',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gift',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Others',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
