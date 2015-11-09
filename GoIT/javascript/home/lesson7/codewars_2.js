/**
 Can you keep a secret? -
 */

function createSecretHolder(secret) {
    return {
        value: secret,
        setSecret: function(value) { this.value = value; },
        getSecret: function() { return this.value; }
    }
}