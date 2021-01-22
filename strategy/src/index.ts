import { StrategyB } from './strategies/StrategyB.model';
import { StrategyA } from './strategies/StrategyA.model';
import { Context } from './Context';

const context = new Context(new StrategyA());
context.doSomeBusinessLogic();

const contextB = new Context(new StrategyB());
contextB.doSomeBusinessLogic();