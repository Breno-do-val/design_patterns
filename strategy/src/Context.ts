import { Strategy } from './interfaces/Strategy.interface';

export class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {

        const result = this.strategy.doAlgorithm(['b', 'a', 'c', 'd']);
        console.log(result.join(','))
    }

}