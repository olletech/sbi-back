module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
      nome: DataTypes.STRING,
      color: DataTypes.STRING
    });
    
    return Category;
  };
  