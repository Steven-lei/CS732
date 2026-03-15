import admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
//import serviceAccount from "./cs732-5cfa7-firebase-adminsdk-fbsvc-9761c46788.json" with { type: "json" };
export const initFireBase = () => {
  try {
    const encodedConfig = process.env.FIREBASE_CONFIG_BASE64;

    if (!encodedConfig) {
      throw new Error("FIREBASE_CONFIG_BASE64 is missing");
    }

    // decoded to JSON
    const decodedString = Buffer.from(encodedConfig, "base64").toString(
      "utf-8",
    );
    const serviceAccount = JSON.parse(decodedString);

    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log("Firebase Admin initialized");
    }
  } catch (error) {
    console.error("failed to initialize Firebase Admin:", error.message);
  }
};
export const adminApp = () => (admin.apps.length === 0 ? null : admin.app());
export { getAuth };
