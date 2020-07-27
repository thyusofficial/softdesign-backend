module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'softdesign',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
