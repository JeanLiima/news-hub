import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
	return {
		"name": "Agregador de Notícias",
		"short_name": "Notícias",
		"start_url": "/",
		"display": "standalone",
		"background_color": "#ffffff",
		"description": "Um agregador de notícias por categoria.",
		"icons": [
			{
				"src": "/icons/icon-192x192.png",
				"sizes": "192x192",
				"type": "image/png"
			},
			{
				"src": "/icons/icon-512x512.png",
				"sizes": "512x512",
				"type": "image/png"
			}
		]
	}
}