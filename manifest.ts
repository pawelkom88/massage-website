import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Healthy Muscles - Massage Therapy Newport | Relaxation, Sports, Remedial',
    short_name: 'Healthy Muscles',
    description: "Newport's trusted expert in relaxation, sports, and remedial massages. Experience the difference today for a healthier you. (Book now)",
    start_url: 'https://healthymuscles.co.uk/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}