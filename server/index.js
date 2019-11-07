const five = require('johnny-five');
const express = require('express');
const cors = require('cors');

const board = new five.Board();

board.on('ready', () => {
  const led = new five.Led(13);
  const app = express();
  app.use(cors());
  app.get('/led', (req, res) => {
    const { action } = req.query;
    switch(action){
      case 'on': {
        led.stop()
        led.on();
        res.status(200).send('Led on');
        break;
      }
      case 'off': {
        led.stop()
        led.off();
        res.status(200).send('Led off');
        break;
      }
      case 'blink': {
        led.blink(1000);
        res.status(200).send('Led blinking');
        break;
      }
      default: {
        res.status(200).send('action no found');
        break;
      }
    }
  })
  app.listen(8080, () => console.log('server running on localhost:8080'))
})

