import Book from '../models/Book';

class BookController {
  async index(req, res) {
    const books = await Book.findAll({
      order: ['name'],
      attributes: ['id', 'name', 'description', 'price', 'take'],
    });
    return res.json(books);
  }

  async store(req, res) {
    const book = await Book.create(req.body);

    return res.json(book);
  }

  async update(req, res) {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(400).json({ error: 'Book does not exists.' });
    }

    await book.update(req.body);

    return res.json(book);
  }

  async delete(req, res) {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(400).json({ error: 'Book does not exists' });
    }

    await book.destroy();

    return res.json({ ok: true });
  }
}

export default new BookController();
