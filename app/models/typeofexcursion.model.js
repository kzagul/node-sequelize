module.exports = (sequelize, Sequelize) => {
    const TypeOfExcursion = sequelize.define("typeofexcursion", {
        id: {
            type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
        },
        typeexcursion: DataTypes.STRING,
    });
    return TypeOfExcursion;
  };