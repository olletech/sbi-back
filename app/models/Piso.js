module.exports = (sequelize, DataTypes) => {
  const Piso = sequelize.define("v2_tb_pisos", {
    id_shopping: DataTypes.INTEGER,
    id_status: DataTypes.INTEGER,
    nome_piso: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  });

  return Piso;
};
