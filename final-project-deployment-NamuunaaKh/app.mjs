import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import router from './routes/index.mjs';
import exphbs from 'express-handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import handlebars from 'handlebars';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'layout',
    handlebars: allowInsecurePrototypeAccess(handlebars),
    helpers: {
      truncate: function (str, len) {
        if (!str || typeof str !== 'string') {
            console.log('Truncate received invalid input:', str);
            return '';
          }
        // console.log('Truncate called with:', str, len);
        if (str.length > len) {
          return str.substring(0, len) + '...';
        }
        return str;
      },
      eq: function (a, b) {
        return a === b;
      },
      isActive: function (currentPath, linkPath) {
        return currentPath === linkPath ? 'active' : '';
      }
    }
});

  
app.engine('.hbs', hbs.engine);

app.set('view engine', 'hbs');
app.set('views', path.join(path.dirname(fileURLToPath(import.meta.url)), 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// this middleware must be before rendering any pages
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

app.use('/', router);

app.listen(3000);