import { bugs, displayName, homepage, version } from "../../package.json";
import { getApplicationAgent } from "../application";

export const defaultUserAgent = getApplicationAgent({
	name: displayName,
	version,
	contact: homepage
});

export const issueUrl = bugs.url;
export { version };
