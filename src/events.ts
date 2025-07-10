import type {
	GroupLimitedMember,
	GroupRole
} from "./generated/types.gen";

export interface EventData {
	"group-member-updated": { member: GroupLimitedMember };
	"group-role-updated": { role: GroupRole };
}

export type Events = { [K in keyof EventData]: (data: EventData[K]) => void; } & {
	// todo: remove this once we've strictly typed all events.
	[K: string]: (data: unknown) => void;
};
