exports.httpConfig = {
  staticDir: 'static'
};

exports.urls = [
    [ '/([^/]*)/edit', 'actions', 'edit' ],
    [ '/', 'actions' ]
];

exports.app = 'helma/webapp';

exports.middleware = [
    'helma/middleware/etag',
    'helma/middleware/responselog'
];

// var Store = require('helma/storage/filestore').Store;
exports.store = require('helma/storage/dbstore/hibernate');

exports.macros = [
    'helpers',
    'helma/skin/macros',
    'helma/skin/filters'
];

exports.charset = 'UTF-8';
exports.contentType = 'text/html';
