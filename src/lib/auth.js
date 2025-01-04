import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET || "dhfkjh4539afjkla904utjfka94ut";

export const createToken = (user) => {
  const token = jwt.sign({ user }, secretKey, { expiresIn: "5m" });
  return token;
};

export const VerifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token available" });
    }

    const decoded = jwt.verify(token, secretKey);

    req.user = decoded.user;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
