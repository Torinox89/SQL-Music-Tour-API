'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Event, Stage_events, Set_time }) {
      // events 
      Stage.belongsToMany(Event, {
        foreignKey: "stage_events_event_id",
        as: "events",
        through: Stage_events
      })

      // set times 
      Stage.hasMany(Set_time, {
        foreignKey: "stage_id",
        as: "set_time"
      })
    }
  }
  
  Stage.init({
    stage_id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false,
      autoIncrement:true
    },
    stage_name: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages'
  });
  return Stage;
};
