module.exports = (sequelize, DataTypes) => {
  const Setor = sequelize.define("v2_tb_setores", {
    id_shopping: DataTypes.INTEGER,
    id_piso: DataTypes.INTEGER,
    id_status: DataTypes.INTEGER,
    nome_setor: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  });

  return Setor;
};
