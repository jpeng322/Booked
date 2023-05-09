import { Strategy, ExtractJwt } from "passport-jwt";

export default function setupJWTStrategy(passport) {
    passport.use(
        new Strategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "showMeTheProvidersOrClients"
        }, function (payload, done) {
            try {
                return done(null, payload);
            } catch (e) {
                console.log(e)
                return done(e, null);
            }
        })
    );
};