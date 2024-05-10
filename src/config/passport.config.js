const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;

const Admin = require('../model/Admin');
const User = require('../model/Usuario');

const jwt = require('jsonwebtoken');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const initializePassport = () => {
    passport.use(new GitHubStrategy({
        clientID:'',
        clientSecret:'',
        callbackURL:''
    }, async (accessToken, refreshToken, profile, done) => {

        try {
            const user = await User.findOne({ email: profile._json.email });
            if (user) {
                return done(null, user);
            }else{
                const newUser = new User({
                name: profile._json.name,
                email: profile._json.email,
                })
                await newUser.save();
                return done(null, newUser);
            }
        }catch (error) {
                return done(error);
            }
    
    }))

    passport.use('user', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {

        try {
            const user = await User.findOne({ email });
            if(!user || !user.checkPassword(password)) {
                return done(null, false, {message: 'Email ou senha incorretos'});
            }
        }catch (error) {
            return done(error);
        }
    }));

    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'coderSecret'
    }, async(jwtPayload, done) => {
        console.log('Jwt Payload', jwtPayload);
        try {
            const user = await User.findById(jwtPayload.sub);
            if(user) {
                return done(null, user);
        }else{
            return done(null, false);
        }
    }catch (error) {
        return done(error);
    }
    }))
}
