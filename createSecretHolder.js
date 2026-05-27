function createSecretHolder(secret) {
   return {
        getSecret: function() {
            return secret; 
        },
        setSecret: function(newSecret) {
            secret = newSecret;
        }
    };
}


let secretHolder = createSecretHolder("mySecret");
console.log(secretHolder.getSecret());
let oldSecret = secretHolder.setSecret("oldSecret");
console.log(secretHolder.getSecret());