'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // events 
      }
    }

  Stage_events.init({
    stage_events_id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true},
    stage_events_event_id:{
      type:DataTypes.INTEGER,
      allowNull:false},
    stage_events_stage_id:{ 
      type:DataTypes.INTEGER,
    allowNull: false}
  }, {
    sequelize,
    modelName: 'Stage_events',
    tableName: 'stage_events2'
  });
  return Stage_events;
};
