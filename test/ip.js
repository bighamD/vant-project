const address = require('address');
console.log(address.ip())
address.dns(function (err, addrs) {
    console.log(addrs);
    // ['10.13.2.1', '10.13.2.6']
});