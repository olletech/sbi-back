module.exports = (sequelize, DataTypes) => {
  const Vistoria = sequelize.define("v2_tb_vistoria", {
    id_usuario: DataTypes.INTEGER,
    id_shopping: DataTypes.INTEGER,
    id_loja: DataTypes.INTEGER,

    id_tipo_vistoria: DataTypes.INTEGER,
    dt_vistoria: DataTypes.DATE,
    dt_alteracao: DataTypes.DATE,
    observacao: DataTypes.STRING,
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    mail_addresses1: DataTypes.STRING,
  }, {timestamps: false});

  return Vistoria;
};
