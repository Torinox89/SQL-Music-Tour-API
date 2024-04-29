'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({Meet_greet}) {
      // define association here
        Event.hasMany(Meet_greet, {
          foreignKey: "meet_greet_event_id",
            as: "event_meet_greets"
        })
    } }
Event.init({
    event_id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true},
    event_name: {
      type: DataTypes.TEXT(255),
      allowNull: false},
    event_date: {
      type:DataTypes.DATE,
    allowNull: false},
    event_start_time: {
      type:DataTypes.DATE,
      allowNull:false},
    event_end_time:{
      type:DataTypes.DATE,
      allowNull:false
  }
},
  {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps:false
  });
  return Event;
};