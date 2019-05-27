'use strict';

import { UUID } from "sequelize/types";

export default (sequelize, DataTypes) => {
  const player = sequelize.define('player', {
    playe_id: {
      type: DataTypes.STRING,
      format: UUID,
      allowNull: {
        args: false
      },
      unique: {
        args: true
      }
    },
    player_name: {
      type: DataTypes.TEXT,
      allowNull: {
        args: false,
      },
      unique: {
        args: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false
      }, 
      unique: {
        args: true
      }
    },
    passhash: {
      type: DataTypes.STRING,
      allowNull: {
        args: false
      }
    }
  }, {});
  player.associate = (models) => {
    // associations can be defined here
    player.hasMany(models.character, {
      foreignKey: 'player_id',
    })
  };
  return player;
};