module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define("v2_tb_status", {
    nome_status: DataTypes.STRING
  });

  return Status;
};
