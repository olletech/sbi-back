module.exports = (sequelize, DataTypes) => {
  const LojaSalvar = sequelize.define("LojaSalvar", {
    idUsuario: DataTypes.INTEGER,
    grupo: DataTypes.STRING,
    descRecomendacao: DataTypes.STRING,
    pathFoto: DataTypes.STRING,
    fotoRevistoria: DataTypes.STRING,
    status: DataTypes.STRING,
    enviada: DataTypes.BOOLEAN
  });

  return LojaSalvar;
};
