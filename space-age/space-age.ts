import { SpaceAgeDerived } from './raw-derived';

class SpaceAge extends SpaceAgeDerived {
    constructor(ageInSeconds:number) {
        super(ageInSeconds)
    }
}

export { SpaceAge };