declare module "three-globe" {
  import { Object3D } from "three";

  class ThreeGlobe extends Object3D {
    constructor();
    globeMaterial(): any;
    hexPolygonsData(data: any[]): this;
    hexPolygonResolution(resolution: number): this;
    hexPolygonMargin(margin: number): this;
    showAtmosphere(show: boolean): this;
    atmosphereColor(color: string): this;
    atmosphereAltitude(altitude: number): this;
    hexPolygonColor(color: string | ((d: any) => string)): this;
    arcsData(data: any[]): this;
    arcStartLat(lat: (d: any) => number): this;
    arcStartLng(lng: (d: any) => number): this;
    arcEndLat(lat: (d: any) => number): this;
    arcEndLng(lng: (d: any) => number): this;
    arcColor(color: string | ((d: any) => string)): this;
    arcAltitude(altitude: (d: any) => number): this;
    arcStroke(stroke: (d: any) => number): this;
    arcDashLength(length: number): this;
    arcDashInitialGap(gap: (d: any) => number): this;
    arcDashGap(gap: number): this;
    arcDashAnimateTime(time: (d: any) => number): this;
    pointsData(data: any[]): this;
    pointColor(color: (d: any) => string): this;
    pointsMerge(merge: boolean): this;
    pointAltitude(altitude: number): this;
    pointRadius(radius: number): this;
    ringsData(data: any[]): this;
    ringColor(color: (d: any) => (t: number) => string): this;
    ringMaxRadius(radius: number): this;
    ringPropagationSpeed(speed: number): this;
    ringRepeatPeriod(period: number): this;
  }

  export default ThreeGlobe;
}
