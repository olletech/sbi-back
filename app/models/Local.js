module.exports = (sequelize, DataTypes) => {
  const Local = sequelize.define("v2_tb_locais", {
    nome_local: DataTypes.STRING,
    id_status: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
    id_shopping: DataTypes.INTEGER,
    id_rede: DataTypes.INTEGER
  });

  return Local;
};
