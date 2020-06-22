module.exports = (sequelize, DataTypes) => {
  const Shopping = sequelize.define("v2_tb_shopping", {
    id_rede: DataTypes.INTEGER,
    nome_shopping: DataTypes.STRING,
    path: DataTypes.STRING,
    id_regional: DataTypes.INTEGER,
    id_status: DataTypes.INTEGER,
    path_banner: DataTypes.DATE
  });

  return Shopping;
};
