export type MaybePromise<T> = Promise<T> | T;

export type LazyFunction<T> = () => MaybePromise<T>;
export type Lazy<T> = LazyFunction<T> | MaybePromise<T>;

function isLazyFunction<T>(value: Lazy<T>): value is LazyFunction<T> {
	return typeof value === "function";
}

/**
 * Collapse a lazy value into a promise.
 *
 * If the value is a function, it will be called and the result will be returned.
 * If the value is already a promise or a non-function value, it will be returned as is.
 *
 * @param value The lazy value to collapse.
 * @returns A promise that resolves to the value.
 */
export async function collapse<T>(value: Lazy<T>): Promise<T> {
	return isLazyFunction(value) ? value() : value;
}

export function tryJsonParse(value: string): unknown {
	try {
		return JSON.parse(value);
	}
	catch {
		return value;
	}
}
