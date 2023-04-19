const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const GOOGLE_CLIENT_ID ="1026244656392-ooftvu5o91ofe4s86h7a2jtvvov22unv.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET ="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";

const FACEBOOK_CLIENT_ID ="546622327620793";
const FACEBOOK_CLIENT_SECRET ="50df96f7d59103ae24355e41681de0eb";

passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
    },
    function(accessToken, refreshToken, profile, done) {
        done(null,profile)
    }
));

// passport.use(new FacebookStrategy({
//     clientID: FACEBOOK_CLIENT_ID,
//     clientSecret: FACEBOOK_CLIENT_SECRET,
//     callbackURL: "/auth/facebook/callback",
// },
// function(accessToken, refreshToken, profile, done) {
//     done(null,profile)
// }
// ));
passport.serializeUser((user, done)=>{
    done(null,user)
})
passport.deserializeUser((user, done)=>{
    done(null,user)
})
