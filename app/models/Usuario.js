module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "v2_users",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      remember_token: DataTypes.STRING,
      document_number: DataTypes.STRING,
      phone: DataTypes.STRING,
      gender: DataTypes.STRING,
      hired_at: DataTypes.DATE,
      birth_at: DataTypes.DATE,
      shopping_id: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      confirmation_code: DataTypes.STRING,
      confirmed: DataTypes.BOOLEAN,
      path: DataTypes.STRING,
      mestre: DataTypes.BOOLEAN
    },
    {
      timestamps: false
    }
  );

  return Usuario;
};
