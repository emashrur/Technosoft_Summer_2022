/**
 * Logical Operators (&&, ||, !)
 * && -> and-operator
 *      -> All combined conditions must be true
 * || -> or-operator
 *      -> atleast  one of any of the combined conditions must be true.
 * ! -> not-operator
 *      -> makes true into false, and vice versa
 */

let lVar1 = 10, lVar2 = 20, lVar3 = 30, lVar4 = 40;

/**
 * lVar1 is greater than lVar3 and lVar2 is not equal to lVar 4
 * 
 * lVar1 > lVar3 && lVar2 !== lVar4
 * 
 * False && True
 * 
 * Final answer FALSE, for && operator both or all comparisons being tested must be true for answer to be true.
 */

let lRes1 = lVar1 <= lVar3 && (lVar2 === lVar3 + lVar4);
console.log(`${lVar1} <= ${lVar3} && (${lVar2} === ${lVar3} + ${lVar4}) = ${lRes1}`);

lRes1 = lVar1 <= lVar3 && !(lVar2 === lVar3 + lVar4);
console.log(`${lVar1} <= ${lVar3} && !(${lVar2} === ${lVar3} + ${lVar4}) = ${lRes1}`);