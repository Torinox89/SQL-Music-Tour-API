'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Band,Event}) {
      // define association here
      Meet_greet.belongsTo(Band,{
        foreignKey: "meet_greet_band_id",
        as: "band"
     })
     Meet_greet.belongsTo(Event,{
      foreignKey: "meet_greet_event_id",
      as: "event"
    })
  } }

Meet_greet.init({
    meet_greet_id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false},
    meet_greet_event_id: {
      type:DataTypes.INTEGER,
      allowNull:false},
    meet_greet_band_id: {
      type:DataTypes.INTEGER,
      allowNull:false},
    meet_greet_start_time: {
      type:DataTypes.DATE,
      allowNull:false},
    meet_greet_end_time:{
      type:DataTypes.DATE,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'Meet_greet',
    tableName: 'meet_greet',
    timestamps:false
  });
  return Meet_greet;
};
