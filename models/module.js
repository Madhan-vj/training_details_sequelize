'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Module.hasMany(models.Category, {as: 'category'})
      Module.belongsTo(models.Training, {foreignKey: 'trainingId', as: 'training'})
    }
  };
  Module.init({
    name: DataTypes.STRING,
    trainingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Module',
  });
  return Module;
};