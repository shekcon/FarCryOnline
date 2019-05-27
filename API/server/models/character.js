'use strict';
export default (sequelize, DataTypes) => {
  const character = sequelize.define('character', {
    player_id: {
      type: DataTypes.UUID,
      allowNull: {
        args: false
      }
    },
    character_name: {
      type: DataTypes.UUID,
      allowNull: {
        args: false
      }
    },
    character_color: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false
      }
    }
  }, {});
  character.associate = (models) => {
    // associations can be defined here
  };
  return character;
};