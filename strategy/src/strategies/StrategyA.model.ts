import { Strategy } from '../interfaces/Strategy.interface';

export class StrategyA implements Strategy { 
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }

}