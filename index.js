const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits',0);

app.get('/',(req,res) => {
    
    res.send('Nunber of visits is' + visits);
    client.set('visits',parstInt(visits)+1);

});

app.listen(8081,() =>
{
    console.log('listening to port 8081');
});