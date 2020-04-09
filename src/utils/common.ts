export let common={
     hash:{ 
        generate: function(password:string){
            var passwordHash = require('password-hash');
            var hashedPassword = passwordHash.generate(password);
            return hashedPassword;
        },
        verity:function(password:string,hashedPassword:string){
            var passwordHash = require('password-hash');
            return passwordHash.verify(password, hashedPassword); 
        }
    },
    fibonacci:{

    }
}