import type { WebApplication } from "schema-dts"
import { webApp } from "./web-app"

describe("webApp", () => {
	it("should return the correct structured data", () => {
		const data: WebApplication = {
			"@type": "WebApplication",
			name: "Example Web App",
			url: "https://example.com",
			browserRequirements: "Chrome 90+, Firefox 88+",
			offers: {
				"@type": "Offer",
				price: "0.00",
				priceCurrency: "USD",
			},
		}

		expect(webApp(data)).toEqual({
			"@context": "https://schema.org",
			...data,
		})
	})

	it("should return the correct structured data with an image", () => {
		const data: WebApplication = {
			"@type": "WebApplication",
			name: "Example Web App",
			url: "https://example.com",
			browserRequirements: "Chrome 90+, Firefox 88+",
			offers: {
				"@type": "Offer",
				price: "0.00",
				priceCurrency: "USD",
			},
			image: "https://example.com/example-app.jpg",
		}

		expect(webApp(data)).toEqual({
			"@context": "https://schema.org",
			...data,
		})
	})

	it("should return the correct structured data with a description", () => {
		const data: WebApplication = {
			"@type": "WebApplication",
			name: "Example Web App",
			url: "https://example.com",
			browserRequirements: "Chrome 90+, Firefox 88+",
			offers: {
				"@type": "Offer",
				price: "0.00",
				priceCurrency: "USD",
			},
			description: "An example web application description.",
		}

		expect(webApp(data)).toEqual({
			"@context": "https://schema.org",
			...data,
		})
	})
})
