module.exports = (sequelize, DataTypes) => {
  const ShoppingItem = sequelize.define("v2_tb_shopping_itens", {
    id_shopping: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    id_setor: DataTypes.INTEGER,
    id_grupo: DataTypes.INTEGER,
    id_status: DataTypes.INTEGER,
    cod_item: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return ShoppingItem;
};
