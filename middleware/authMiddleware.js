import { UnauthenticatedError, UnauthorizedError, BadRequestError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

// We restrict the access if the cookie is not present
// or the JWT is not valid. If everthing is fine we aattach
// the user from the JWT to our request...
export const authenticateUser = (req, res, next) => {
    const {token} = req.cookies;
    if(!token) throw new UnauthenticatedError('authentication invalid');

    try {
        const {userId, role} = verifyJWT(token);
        const testUser = userId === '6548de7a37751a8cd03a550b';
        req.user = { userId, role, testUser };
    next();
    } catch (error) {
        throw new UnauthenticatedError('authentication invalid');
    }
}

export const authorizePermissions = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)) {
            throw new UnauthorizedError('Unauthorized to access this route');
        }
        next();
    }
}

export const checkForTestUser = (req, res, next) => {
    if(req.user.testUser) throw new BadRequestError('Demo User. Read only!');
    // if everything is correct, if not a test user we want to pass it to next() middleware
    next();
}
