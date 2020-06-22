module.exports = (sequelize, DataTypes) => {
  const Evidencia = sequelize.define("v2_tb_vistoria_evidencia", {
    id_vistoria: DataTypes.INTEGER,
    id_recomendacao: DataTypes.INTEGER,
    idEvidenciaAnterior: DataTypes.INTEGER,
    resolvida: DataTypes.BOOLEAN,
    id_local: DataTypes.INTEGER,
    dt_ultima_revistoria: DataTypes.DATEONLY,
    dt_vistoria: DataTypes.DATEONLY,
    nivel_notificado: DataTypes.INTEGER,
    path_foto_revistoria: DataTypes.STRING,
    id_loja: DataTypes.INTEGER,
    ocorrencia: DataTypes.BOOLEAN,
    path_foto: DataTypes.STRING,
    data_original: DataTypes.DATEONLY,
    id_evidencia: DataTypes.INTEGER,
    dt_prazo: DataTypes.DATEONLY,
    id_grupo: DataTypes.INTEGER,
    ajustada: DataTypes.BOOLEAN
  });

  return Evidencia;
};
