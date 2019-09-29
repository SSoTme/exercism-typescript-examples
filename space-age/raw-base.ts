class SpaceAgeBase {
    toPlanet(earthRelativeOrbit:number) {
        return Number((this.earthYears / earthRelativeOrbit).toFixed(2));
    }

    [key:string] : any;
    public earthYears = 0;
    public seconds = 0;

    constructor(spaceAgeInSeconds:number) {
        var self = this;
        this.seconds = spaceAgeInSeconds;
        this.earthYears = spaceAgeInSeconds / 365.25 / 24 / 60 / 60;
    }
}

export { SpaceAgeBase }