import Sequelize from 'sequelize';

import User from '../app/models/User';
import Book from '../app/models/Book';

import databaseConfig from '../config/database';

const models = [User, Book];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
