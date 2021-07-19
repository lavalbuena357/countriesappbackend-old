const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// conn.sync({ force: false }).then(() => {
//   server.listen(8000, () => {
//     console.log(`listening at 8000`); // eslint-disable-line no-console
//   });
// });

server.listen(8000, () => {
  console.log(`listening at 8000`);
})

