const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail, getUserById)
{
    const auth = async (email, password, done) =>
    {
        const client = new Client()
        const valid = 'pw'
        await client.connect()
        
        pool.query('SELECT NOW()', (err, res) =>
        {
          console.log(err, res)
          valid = res;
          pool.end()
        })

        const user = getUserByEmail(email);
        console.log('authenticate');
        console.log(user);
        if(user == null)
        {
            return done(null, false, {message: 'user not found'});
        }
        else
        {
            try
            {
                if (await bcrypt.compare(password, valid))
                {
                    return done(null, user);
                }
                else
                {
                    return done(null, false, {message: 'wrong password'});
                }
            }
            catch (e)
            {
                return done(e, false, {message: 'unexpected error in password authentication'})
            }       
        }
    }

    passport.use(new localStrategy({usernameField: 'email'}, auth));

    passport.serializeUser((user, done) => done(null, user.id));
        
    passport.deserializeUser((id, done) => done(null, getUserById(id)));
}

module.exports = initialize;