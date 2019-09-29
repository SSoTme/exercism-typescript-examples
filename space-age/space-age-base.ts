class SpaceAgeBase {
    public seconds : number;

    constructor(spaceAgeInEarthSeconds : number) {
        this.seconds = spaceAgeInEarthSeconds;
    }

    toPlanet(earthRelativeOrbit : number) {
        return Number((this.seconds / earthRelativeOrbit / 365.25 / 24 / 60 / 60).toFixed(2));
    }
}

export { SpaceAgeBase }