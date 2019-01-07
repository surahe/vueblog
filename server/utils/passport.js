const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const userSrevice = require('../service/user')

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new LocalStrategy(
  async function(username, password, cb) {
    let where = {
      username
    }
    let result = await userSrevice.findOne(where)
    if (result !== null) {
      if (result.password === password) {
        return cb(null, result)
      } else {
        return cb(null, false, '密码错误')
      }
    } else {
      return cb(null, false, '用户不存在')
    }
  }
))


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, cb) {
  console.log('serializing user:', user.id);
  cb(null, user.id)
})

passport.deserializeUser(function(id, cb) {
  console.log("deserializing user " + id);
  userSrevice.findOne({id})
    .then((data) => {
      cb(null, data)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = passport