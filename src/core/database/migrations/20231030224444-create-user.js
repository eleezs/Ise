'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.ENUM,
        values: ['male', 'female']
      },
      user_status: {
        type: Sequelize.ENUM,
        values: ['active', 'suspended', 'deactivated', 'blocked'],
        defaultValue: 'active'
      },
      role: {
        type: Sequelize.ENUM,
        values: ['admin', 'student', 'tutor']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
    await queryInterface.sequelize.query('DROP TYPE "enum_Users_user_status" CASCADE')
    await queryInterface.sequelize.query('DROP TYPE "enum_Users_gender" CASCADE')
    await queryInterface.sequelize.query('DROP TYPE "enum_Users_role" CASCADE')
  }
};