import { Sequelize, DataTypes } from 'sequelize'

export default (sequelize) => {
  const User = sequelize.define('User', {
      login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
     },
     password: {
       type: DataTypes.STRING,
       allowNull: false
      }
  });
  return User;
};