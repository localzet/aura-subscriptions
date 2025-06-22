import invariant from 'tiny-invariant'

/**
 * Функция сопоставления, как в PHP
 * @param conditions - Массив [условие, значение]
 * @returns Значение первого выполненного условия
 * @example
 * ```tsx
 * const value = match(
 *  [condition1, value1],
 *  [condition2, value2],
 *  [condition3, value3],
 *  [true, defaultValue]
 * );
 */
export function match<T>(...conditions: Array<[boolean, T]>) {
    const foundedCondition = conditions.find(([condition]) => condition) ?? conditions.at(-1)
    invariant(foundedCondition, 'Не выполнено ни одного условия')
    return foundedCondition[1]
}
