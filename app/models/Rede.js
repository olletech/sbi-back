module.exports = (sequelize, DataTypes) => {
  const Rede = sequelize.define("v2_tb_rede", {
    nome_rede: DataTypes.STRING,
  });

  return Rede;
};
