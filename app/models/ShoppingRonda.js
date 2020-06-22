module.exports = (sequelize, DataTypes) => {
  const ShoppingRonda = sequelize.define("v2_tb_shopping_rondas", {
    id_shopping: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    pisos: DataTypes.STRING,
    observacao: DataTypes.STRING,
    inicio_ronda: DataTypes.DATEONLY,
    final_ronda: DataTypes.DATEONLY,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return ShoppingRonda;
};
