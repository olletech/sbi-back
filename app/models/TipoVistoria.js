module.exports = (sequelize, DataTypes) => {
  const TipoVistoria = sequelize.define("v2_tb_tipo_vistoria", {
    nome_tipo_vistoria: DataTypes.STRING,
    modo_area_comum: DataTypes.CHAR,
    modo_ronda: DataTypes.CHAR,
    id_status: DataTypes.INTEGER
  });

  return TipoVistoria;
};
