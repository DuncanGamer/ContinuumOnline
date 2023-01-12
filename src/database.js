

mongosee = require('mongoose');
mongosee.set('strictQuery', true);

//Conexión a la base de datos
mongosee.connect(process.env.MONGO_URI, {
   
   
    useNewUrlParser: true,
    
    useUnifiedTopology: true
    
})
.then(db => console.log('DB is connected'))
.catch(err => console.error('Db is not connected' + err));
 