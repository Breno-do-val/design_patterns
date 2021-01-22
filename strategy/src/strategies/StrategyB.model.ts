import { Strategy } from '../interfaces/Strategy.interface';

export class StrategyB implements Strategy {
    doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }

}