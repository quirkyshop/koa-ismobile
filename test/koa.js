var mobileDetecion = new require('../index.js');
var koa = new require('koa');
var request = new require('supertest');

exports['koa-apply-test'] = function(test) {
  var app = koa();

  app.use(mobileDetecion());

  app.use(function*(next) {    
    test.ok(!this['is-mobile'], 'supertest request is not a mobile');
    yield next;
  });

  request(app.listen()).get('/').end(function() {
    test.done();
    
    setTimeout(function() {
      process.exit();
    });
  });
};
