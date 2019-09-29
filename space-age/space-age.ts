/*******************************************************
    DERIVED CODE:
    This file is derived from the /planet-orbits.json 
    using /write-raw/create-raw-solutions.xslt
    git@github.com:SSoTme/exercism-typescript-examples.git
*******************************************************/
import { SpaceAgeBase } from "./space-age-base";

class SpaceAge extends SpaceAgeBase {
    onMercury() { return this.toPlanet(0.2408467); }
    onVenus() { return this.toPlanet(0.61519726); }
    onEarth() { return this.toPlanet(1); }
    onMars() { return this.toPlanet(1.8808158); }
    onJupiter() { return this.toPlanet(11.862615); }
    onSaturn() { return this.toPlanet(29.447498); }
    onUranus() { return this.toPlanet(84.016846); }
    onNeptune() { return this.toPlanet(164.79132); }
    onOr() { return this.toPlanet(180.34343); }
    onAny() { return this.toPlanet(190.12345); }
    onOther() { return this.toPlanet(221.54321); }
    onPlanet() { return this.toPlanet(424.24242); }
}

export { SpaceAge }
