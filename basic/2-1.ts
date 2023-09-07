// 변수, 매개변수, 반환값에 타입을 붙이면 된다. 타입을 부여하는 행위 => typing

const str: string = "hello";
const num: number = 123;
const bool: boolean = false;
const n: null = null;
const u: undefined = undefined;
const sym: symbol = Symbol('sym');
const big: bigint = 100000000n;
const obj: object = { hello: 'world' };

// 함수에서의 표현
function plus(x: number, y: number): number {
    return x + y;
}

const minus = (x: number, y: number): number => x - y;