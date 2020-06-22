module.exports = (sequelize, DataTypes) => {
    const CategoriaLoja = sequelize.define("v2_tb_categoria_loja", {
      id_shopping: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      ocorre_mes: DataTypes.INTEGER
    });
    
    return CategoriaLoja;
  };
  