import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/T2A', (req, res) => {
    const summ = (+req.query.a || 0) + (+req.query.b || 0);
    res.send(summ.toString());
});

app.get('/T2B', (req, res) => {
    var arr = req.query.fullname.split(' ');
    var str = '';
    for (var i = 0; i < arr.length; i++) {
      if (i=0) str = str + arr[i]
      else str = str + str.charAt(0) + '.';
    }
}   if (i>3) res.send('Invalid fullname');
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
