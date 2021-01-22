/**
 * Common interface for all variants of algorithms
 */
export interface Strategy {
    doAlgorithm(data: string[]): string[];
}