import crypto from "crypto";

export const generateRamdomBytes = () => crypto.randomBytes(16).toString("hex").normalize();
