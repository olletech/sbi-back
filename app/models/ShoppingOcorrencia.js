module.exports = (sequelize, DataTypes) => {
  const ShoppingOcorrencias = sequelize.define("v2_tb_shopping_ocorrencias", {
    id_shopping: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    id_shopping_ronda: DataTypes.INTEGER,
    id_piso: DataTypes.INTEGER,
    id_setor: DataTypes.INTEGER,
    id_grupo: DataTypes.INTEGER,
    id_recomendacao: DataTypes.INTEGER,
    id_shopping_item: DataTypes.INTEGER,
    resolvida: DataTypes.BOOLEAN,
    positiva: DataTypes.BOOLEAN,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return ShoppingOcorrencias;
};
