var _ = require('lodash');//require是node專用函式 將lodah賦予_變數,用_是因為lodash的功能是在串接字串(約定俗成)
console.log(_.join(['Hello', 'Node.js'], ''));