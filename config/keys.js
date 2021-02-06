const user = 'mr_cgw';
const password = 'vORYZURuTjQ9Zc9g';
const dbname = 'toast-clone';

module.exports = {
  mongoURI: `mongodb+srv://${user}:${password}@cluster0.qpmb4.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  secretOrKey: 'password',
};
