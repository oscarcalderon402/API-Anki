const notesRouter = require('./notes.router');

function apiRouter(app) {
  app.use('/notes', notesRouter);
}

module.exports = apiRouter;
