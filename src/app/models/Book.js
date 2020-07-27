import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        take: Sequelize.BOOLEAN,
        price: Sequelize.DECIMAL,
      },
      { sequelize }
    );

    return this;
  }
}

export default Book;
