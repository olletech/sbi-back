module.exports = (sequelize, DataTypes) => {
  const Loja = sequelize.define("v2_tb_loja", {
    nome_loja: DataTypes.STRING,
    numero_loja: DataTypes.STRING,
    id_rede: DataTypes.INTEGER,
    id_shopping: DataTypes.INTEGER,
    id_status: DataTypes.INTEGER,
    email: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
    path: DataTypes.STRING,
    id_tipo_vistoria: DataTypes.INTEGER,
    local: DataTypes.STRING,
    id_categoria: DataTypes.INTEGER,
    solution_deadline: DataTypes.DATEONLY,
    last_survey: DataTypes.DATEONLY,
    notification_level: DataTypes.INTEGER,
    current_risk: DataTypes.INTEGER,
    need_notification: DataTypes.BOOLEAN,
    last_survey_id: DataTypes.INTEGER
  }
  );

  return Loja;
};
