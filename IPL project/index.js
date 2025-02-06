const fs = require('fs');

fs.readFile('./archive/deliveries.csv', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log( typeof data )
   
});


