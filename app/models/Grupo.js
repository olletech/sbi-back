module.exports = (sequelize, DataTypes) => {
  const Grupo = sequelize.define("v2_tb_grupo", {
    id_status: DataTypes.INTEGER,
    id_tipo_vistoria: DataTypes.INTEGER,
    id_shopping: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    ordem: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER,
    color: DataTypes.STRING
  });

  return Grupo;
};
