const express = require('express');
const app = express();

app.get('/', (req,res)=>{
  res.send('API H.J EMPREENDIMENTO');
});

app.listen(3000);
