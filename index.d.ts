import { Selection, TransitionLike } from 'd3-selection';

export function boxplot<TDatum>(): BoxPlot<TDatum>

export type BoxplotSymbol = 'dot' | 'tick';

export interface BoxPlot<TDatum> {

    (context: Selection<SVGSVGElement, any, any, any> | Selection<SVGGElement, any, any, any> | TransitionLike<SVGSVGElement, any> | TransitionLike<SVGGElement, any>): void;

    vertical(flag: boolean): this;

    vertical(): boolean;

    scale(scale): this;

    scale(): any;

    showInnerDots(flag: bool): this;

    showInnerDots(): boolean;

    bandwidth(value: number): this;

    bandwidth(): number;

    boxwidth(value: number): this;

    boxwidth(): number;

    symbol(symbol: BoxplotSymbol): this;

    symbol(): BoxplotSymbol;

    opacity(opacity: number): this;

    opacity(): number;

    jitter(jitter: number): this;

    jitter(): number;

    key(any): this;

    key(): any;
}

export interface BoxplotStats<TDatum> {
    fiveNums: [number, number, number, number, number];
    iqr: number;
    step: number;
    fences: ({ start: number; end: number })[];
    boxes: ({ start: number; end: number })[];
    whiskers: ({ start: number; end: number })[];
    points: ({
        value: number;
        datum: TDatum;
        outlier: boolean;
        farout: boolean;
    })[];
}

export function boxplotStats(data: number[]): BoxplotStats<number>;
export function boxplotStats<TDatum>(data: TDatum[], valueof: (datum: TDatum) => number): BoxplotStats<TDatum>;

