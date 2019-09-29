class SpaceAge {
    secondsToYears(seconds: number): any {
        return seconds / 365.25 / 24 / 60 / 60;
    }

    toPlanet(earthRelativeOrbit: number) {
        var answer = Math.round((this.earthYears / earthRelativeOrbit) * 100) / 100
        console.error(answer);
        return answer;
    }

    public earthYears: number = 0;
    public seconds: number = 0;

    constructor(seconds: number) {
        this.seconds = seconds;
        this.earthYears = this.secondsToYears(seconds);
    }

    onEarth(): number {
        return this.toPlanet(1);
    }
    onMercury(): number {
        return this.toPlanet(0.2408467);
    }
    onVenus(): number {
        return this.toPlanet(0.61519726);
    }
    onMars(): number {
        return this.toPlanet(1.8808158);
    }
    onJupiter(): number {
        return this.toPlanet(11.862615);
    }
    onSaturn(): number {
        return this.toPlanet(29.447498);
    }
    onUranus(): number {
        return this.toPlanet(84.016846);
    }
    onNeptune(): number {
        return this.toPlanet(164.79132);
    }
}

export { SpaceAge }