import jwt from "jsonwebtoken";

export const signJWT = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    throw new Error("Error signing JWT");
  }
};

export const verifyJWT = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);a
    return decoded;
  } catch (error) {
    throw new Error("Error verifying JWT");
  }
};