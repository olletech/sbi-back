module.exports = (sequelize, DataTypes) => {
  const Regional = sequelize.define("tb_regional", {
    nome_regional: DataTypes.STRING,
  });

  return Regional;
};
