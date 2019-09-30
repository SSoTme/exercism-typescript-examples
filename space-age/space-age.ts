
/*******************************************************
 *   DERIVED CODE: 
 *   This file is derived from the /planet-orbits.json using
 *   > ssotme json-to-xml -i planet-orbits.json
 *   > ssotme xml-xslt-transform -i planet-orbits.json.xml -i create-raw-solutions.xslt
 *
 *   More details here at this github repo.
 *     git@github.com:SSoTme/exercism-typescript-examples.git
 *     https://exercism.io/tracks/typescript/exercises/space-age/solutions/76044c6c569946de96d15da246df6ff9
 ********************************************************/
import { SpaceAgeBase } from "./space-age-base";

class SpaceAge extends SpaceAgeBase {
    onMercury() { return this.toPlanet(0.2408467); }
    onVenus() { return this.toPlanet(0.61519726); }
    onEarth() { return this.toPlanet(1); }
    onMars() { return this.toPlanet(1.8808158); }
    onJupiter() { return this.toPlanet(11.862615); }
    onSaturn() { return this.toPlanet(29.447498); }
    onUranus() { return this.toPlanet(84.016846); }
    onAnotherPlanet() { return this.toPlanet(123.321); }
    onNeptune() { return this.toPlanet(164.79132); }
}

export { SpaceAge }
