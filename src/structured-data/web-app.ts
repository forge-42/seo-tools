import type { WebApplication, WithContext } from "schema-dts"

/**
 *  This helper is used to generate a WebApplication ld+json structured data object.
 * @param webApp  WebApplication object
 * @see https://schema.org/WebApplication
 * @returns Returns a WebApplication object to be used in head via json-ld script tag
 */
export const webApp = (webApp: WebApplication): WithContext<WebApplication> => {
	return {
		"@context": "https://schema.org",
		...webApp,
	}
}

export type { WebApplication }
