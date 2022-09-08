const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const passport = require('passport');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(express.static(__dirname + '/public'));

const session = require('express-session');
app.use(session({
    secret: 'something',
    cookie: {
        maxAge: 1000 * 50 * 5
    }
}));
app.use(passport.session());
app.set("views", "./views");
app.set("view engine", "ejs");

app.route("/").post(
    passport.authenticate("local", {
      failureRedirect: "/",
      successRedirect: "/dashboard",
    })
  );
const router = require("./route");
app.use("",router);
const localStrategy = require('passport-local').Strategy;
passport.use(new localStrategy(
    (username, password, done) => { 
        if (username == 'john') {
            if (password == 1234) { 
                return done(null, username); 
            } else {
                return done(null, false); 
            }
        } else {
            return done(null, false);
        }
    }
))

passport.serializeUser((username, done) => {
    done(null, username);
})

passport.deserializeUser((name, done) => {
    if (name == 'john') { 
        return done(null, name)
    } else {
        return done(null, false)
    }
})

const port = 9999;
app.listen(port, () => console.log('Server running on ' + port)); 
