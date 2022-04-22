const express = require('express');
const { route } = require('express/lib/application');
const Note = require('../services/note.service');
const router = express.Router();

const service = new Note();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find(req.query);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newNote = await service.create(body);
    res.status(201).json(newNote);
  } catch (error) {
    res.json(error);
  }
});

router.patch(
  '/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
