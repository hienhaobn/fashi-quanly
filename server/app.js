const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const Logger = require('./src/middlewares/logger.middleware');
const MongoHelper = require('./src/helper/mongo/connect');

const ProductRouter = require('./src/routers/product.router');
const AttributeRouter = require('./src/routers/attribute.router');
const ProductAttributeRouter = require('./src/routers/productAttribute.router');
const ProductBrandRouter = require('./src/routers/productBrand.router');
const ProductTypeRouter = require('./src/routers/productType.router');
const PriceRouter = require('./src/routers/price.router');
const OrderRouter = require('./src/routers/orderProduct.router');
const UserRouter = require('./src/routers/user.router');
const OrderItemRouter = require('./src/routers/orderItem.router')
const app = express();
const port = 5005;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Logger.LoggerMiddleware);
app.use(express.static(path.join(__dirname, 'uploads')))
app.use(cors({
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   if (req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//     return res.status(200).json({});
//   }
//   next();
// });
app.listen(port, async (error) => {
  if(error) console.info(error);
  else {
    console.info(`Connected server port ${port} `);
    try {
      await MongoHelper.connect('mongodb://localhost:27017/fashiv2');
      console.info('Connected to mongodb');
    } catch(err) {
      throw new Error(err);
    }
  }
});

app.use(ProductRouter);
app.use(AttributeRouter);
app.use(ProductAttributeRouter);
app.use(ProductBrandRouter);
app.use(ProductTypeRouter);
app.use(PriceRouter);
app.use(OrderRouter);
app.use(UserRouter);
app.use(OrderItemRouter)