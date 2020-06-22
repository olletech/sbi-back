module.exports = (sequelize, DataType) => {
  const ShoppingVerificacaoFotos = sequelize.define(
    "v2_tb_shopping_verificacao_fotos",
    {
      id_shopping_verificacao: DataType.INTEGER,
      path: DataType.STRING,
      created_at: DataType.DATE,
      updated_at: DataType.DATE
    }
  );

  return ShoppingVerificacaoFotos;
};
