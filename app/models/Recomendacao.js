module.exports = (sequelize, DataTypes) => {
  const Recomendacao = sequelize.define("v2_tb_recomendacao", {
    id_tipo_vistoria: DataTypes.INTEGER,
    tipo_vistoria: DataTypes.STRING,
    grupo_recomendacao: DataTypes.STRING,
    desc_recomendacao: DataTypes.STRING,
    desc_recomendacao_ok: DataTypes.STRING,
    norma_recomendacao: DataTypes.STRING,
    id_status: DataTypes.INTEGER,
    risco: DataTypes.INTEGER,
    id_shopping: DataTypes.INTEGER,
  });

  return Recomendacao;
};
