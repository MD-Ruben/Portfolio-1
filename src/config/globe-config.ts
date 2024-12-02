export const globeConfig = {
  pointSize: 4,
  globeColor: "#000000",
  showAtmosphere: true,
  atmosphereColor: "#F0F7EE",
  atmosphereAltitude: 0.1,
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(240,247,238,0.7)",
  ambientLight: "#FFF07C",
  directionalLeftLight: "#F0F7EE",
  directionalTopLight: "#F0F7EE",
  pointLight: "#F0F7EE",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 48.8566, lng: 2.3522 }, // Paris
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

export const globeConnections = [
  {
    order: 1,
    startLat: 48.8566,
    startLng: 2.3522,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: "#FFF07C",
  },
  {
    order: 2,
    startLat: 48.8566,
    startLng: 2.3522,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.5,
    color: "#87BBA2",
  },
  {
    order: 3,
    startLat: 48.8566,
    startLng: 2.3522,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.7,
    color: "#5D737E",
  },
];
