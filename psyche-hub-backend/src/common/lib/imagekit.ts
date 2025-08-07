import ImageKit from "imagekit";
import { env } from "../utils/envConfig";

let imagekit = new ImageKit({
  publicKey: env.IMAGEKIT_PUBLIC_KEY,
  privateKey: env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: env.IMAGEKIT_ENDPOINT,
});

export default imagekit;
