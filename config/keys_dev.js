const database = 'infinite_hunt';
const username = 'hunter_dev';
const password = 'D61EUY1rs7kAA3r8';

module.exports = {
  mongoURI: `mongodb+srv://${username}:${password}@cluster0.qyqvz.mongodb.net/${database}?retryWrites=true&w=majority`,
  secretOrKey: 'secret',
};
