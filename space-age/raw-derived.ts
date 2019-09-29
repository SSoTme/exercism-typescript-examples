import { SpaceAgeBase } from "./raw-base";

class SpaceAgeDerived extends SpaceAgeBase {
    constructor(spaceAgeInSeconds:number) {
        super(spaceAgeInSeconds)
    }
    
    onMercury() { return this.toPlanet(0.2408467); }
    onVenus() { return this.toPlanet(0.61519726); }
    onEarth() { return this.toPlanet(1); }
    onMars() { return this.toPlanet(1.8808158); }
    onJupiter() { return this.toPlanet(11.862615); }
    onSaturn() { return this.toPlanet(29.447498); }
    onUranus() { return this.toPlanet(84.016846); }
    onNeptune() { return this.toPlanet(164.79132); }
    onSomeOtherPlanet() { return this.toPlanet(123.14433); }
}

export { SpaceAgeDerived }
