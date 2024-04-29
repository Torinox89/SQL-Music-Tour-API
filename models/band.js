'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Meet_greet,Set_time}) {
      // define association here
        Band.hasMany(Meet_greet, {
            foreignKey: "meet_greet_band_id",
            as: "meet_greets"
        })
        Band.hasMany(Set_time, {
            foreignKey: "set_time_band_id",
            as: "set_times"
        })
   } }

  Band.init({
    band_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true    
    },
    band_name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    band_genre:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    band_start_time: {
        type: DataTypes.DATE,
        allowNull:false
    },
    band_end_time:{
        type:DataTypes.DATE,
        allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
  });
  return Band;
};