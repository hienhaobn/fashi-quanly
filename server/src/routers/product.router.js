const express = require('express');
const ProductRouter = express.Router();
const path = require('path');
const ProductController = require('../controllers/product.controller');
const routerPath = '/product';
const uploadMulter = require('../helper/upload/upload');
// Handle upload file image
// const multer = require( "multer" ),
//   fs = require( "fs-extra" ),
//   storage = multer.diskStorage( {
//     "destination": ( req, file, cb ) => {
//       const targetPath = path.join(__dirname ,'./public/images');

//       // fs.mkdirsSync( targetPath );
//       cb( null, targetPath );
//     },
//     "filename": ( req, file, cb ) => {
//       cb(
//         null,
//         `${new Date().toISOString().replace( /:|\./g, "" )}-${file.originalname}`
//       );
//     }
//   } ),
//   upload = multer( {
//     "storage": storage,
//     "limits": {
//       "fileSize": 1024 * 1024 * 5
//     },
//     "fileFilter": function( req, file, cb ) {
//       if ( !file.originalname.match( /\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/ ) ) {
//         return cb( new Error( "Only image files are allowed!" ) );
//       }
//       cb( null, true );
//     }
//   } );
// const multer = require( "multer" ),
//   fs = require( "fs-extra" ),
//   storage = multer.diskStorage( {
//     "destination": ( req, file, cb ) => {
//       const path = `./uploads`;

//       fs.mkdirsSync( path );
//       cb( null, path );
//     },
//     "filename": ( req, file, cb ) => {
//       cb(
//         null,
//         `${new Date().toISOString().replace( /:|\./g, "" )}-${file.originalname}`
//       );
//     }
//   } ),
//   upload = multer( {
//     "storage": storage,
//     "limits": {
//       "fileSize": 1024 * 1024 * 5
//     },
//     "fileFilter": function( req, file, cb ) {
//       if ( !file.originalname.match( /\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/ ) ) {
//         return cb( new Error( "Only image files are allowed!" ) );
//       }
//       cb( null, true );
//     }
//   } );

  //, upload.single('fileProduct')
ProductRouter.get(routerPath, ProductController.getProductsController);
ProductRouter.post(routerPath, uploadMulter.single('myImage'), ProductController.postProductController);
ProductRouter.get(`${routerPath}/:id`,ProductController.getDetailProduct);
ProductRouter.put(routerPath, uploadMulter.single('myImage'),ProductController.editProductController);
ProductRouter.delete(routerPath, ProductController.deleteProductController)

module.exports = ProductRouter;