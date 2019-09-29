class SpaceAgeBase {
    public seconds : number;

    constructor(spaceAgeInSeconds:number) {
        this.seconds = spaceAgeInSeconds;
    }

    toPlanet(earthRelativeOrbit:number) {
        return Number((this.seconds / earthRelativeOrbit / 365.25 / 24 / 60 / 60).toFixed(2));
    }
}

export { SpaceAgeBase }