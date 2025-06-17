import { debug } from "debug";

export const log = debug("vrchat");
export const logCache = log.extend("cache");
