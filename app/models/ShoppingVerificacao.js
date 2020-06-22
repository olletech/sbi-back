module.exports = (sequelize, DataTypes) => {
  const ShoppingVerificao = sequelize.define("v2_tb_shopping_verificacoes", {
    id_usuario: DataTypes.INTEGER,
    id_shopping_ocorrencia: DataTypes.INTEGER,
    id_shopping_ronda: DataTypes.INTEGER,
    resolvida: DataTypes.BOOLEAN,
    observacao: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return ShoppingVerificao;
};
