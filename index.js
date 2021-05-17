const dc = require('./discord');
const { sig } = require("./utils/sig");

(async () => {
    sig();

    await dc.initialize();
    // here is where you enter your email and password
    await dc.login('ryanorinda311@gmail.com', 'Evelynnkindathicc!69')

    await dc.likeChannelProcess('469760397533118465', '756114115696525404', 1) // 1 = 1 minute

    debugger;

})();
