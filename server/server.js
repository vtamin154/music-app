const express = require('express');
const fs = require('fs');
const { appData } = require('./mock');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/music', express.static('music'));
const PORT = 3300;

const __AUDIO_TYPE__ = {
  KPOP: 'kpop',
  JPOP: 'jpop',
  US_UK: 'us-uk',
};
const getDirectories = (type) => {
  return fs.readdirSync(`./music/${type}`);
};

const getSongDetails = (type, dir) => {
  try {
    // dat vao trong try catch de xu ly file jpg
    const path = `./music/${type}/${dir}/media`;
    const audioData = fs.readdirSync(path);
    const songInfor = fs.readFileSync(`./music/${type}/${dir}/infor.json`);
    const songInforJson = JSON.parse(songInfor);
    return {
      audioFile: `${path}/${audioData[1]}`,
      avatar: `${path}/${audioData[0]}`,
      ...songInforJson,
    };
  } catch (error) {
    return false;
  }
};

app.get('/song', (req, res) => {
  const songData = {};
  for (let type in __AUDIO_TYPE__) {
    const directoryItems = getDirectories(__AUDIO_TYPE__[type]);
    // console.log(directoryItems);
    directoryItems.forEach((item) => {
      const audioData = getSongDetails(__AUDIO_TYPE__[type], item); // return obj
      if (audioData) {
        if (__AUDIO_TYPE__[type] in songData) {
          songData[__AUDIO_TYPE__[type]].push(audioData);
        } else songData[__AUDIO_TYPE__[type]] = [audioData];
      }
    });
  }

  appData['freelicense'] = songData;
  res.status(200).json({ appData });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
