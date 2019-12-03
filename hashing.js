
const bcrypt = require('bcrypt');
const hashPassword = (password){ 
    return
    bcrypt.hash(password, 10, function(err, hash) 
});

