const planetOrbits = require('./planet-orbits.json');

class SpaceAge {
    toPlanet(earthRelativeOrbit:number) {
        return Number((this.earthYears / earthRelativeOrbit).toFixed(2));
    }

    [key:string] : any;
    public earthYears = 0;
    public ageInSeconds = 0;

    constructor(ageInSeconds:number) {
        var self = this;
        this.ageInSeconds = ageInSeconds;
        this.earthYears = ageInSeconds / 365.25 / 24 / 60 / 60;
        Object.keys(planetOrbits)
              .forEach((planetName:string) => {
                            self['on' + planetName] = () => this.toPlanet(planetOrbits[planetName]);
                        });
    }
}

export default { SpaceAge }