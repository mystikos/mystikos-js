const Jimp = require('jimp');

async function carrierImages(carriers) {
  const promises = [];
  carriers.forEach((carrier) => {
    promises.push(Jimp.read(carrier));
  });
  return Promise.all(promises);
}

function payloadBinary(encData) {
  let stream = '';
  for (let i = 0; i < encData.length; i += 1) {
    stream += `${encData[i].charCodeAt(0).toString(2)}`;
  }
  return stream;
}

module.exports = async (carriers, encData, iv) => {
  const stream = payloadBinary(encData);
  let streamIdx = 0;
  const finalPhoto = 'picture.png';

  return Jimp.read(carriers['carrierImages[0]'].path)
    .then((carrier) => {
      carrier.scan(0, 0, carrier.bitmap.width, carrier.bitmap.height, function embed(x, y, idx) {
        // console.log(streamIdx);
        // eslint-disable-next-line no-plusplus,no-bitwise
        const red = (this.bitmap.data[idx] & ~1) | +stream[streamIdx++];
        // eslint-disable-next-line no-plusplus,no-bitwise
        const green = (this.bitmap.data[idx + 1] & ~1) | +stream[streamIdx++];
        // eslint-disable-next-line no-plusplus,no-bitwise
        const blue = (this.bitmap.data[idx + 2] & ~1) | +stream[streamIdx++];
        // eslint-disable-next-line no-plusplus,no-bitwise
        const alpha = (this.bitmap.data[idx + 3] & ~1) | +stream[streamIdx++];

        carrier.setPixelColor(Jimp.rgbaToInt(red, green, blue, alpha), x, y);
      });
      // return carrier.getBase64Async(Jimp.MIME_PNG);
      carrier.writeAsync(finalPhoto);
    })
    .then(() => finalPhoto)
    .catch((jimpError) => {
      console.error(jimpError);
    });
};
