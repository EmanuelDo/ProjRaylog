const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const avaliacao = sequelize.define('avaliacao', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comentario: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  avaliacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'avaliacao',
  timestamps: false,
});

module.exports = avaliacao;

