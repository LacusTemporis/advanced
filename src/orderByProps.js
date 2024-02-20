export function orderByProps(obj, order) {
  const orderedProps = [];
  const restProps = [];

  // Перебор свойств в порядке из массива сортировки
  for (const prop of order) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      orderedProps.push({ key: prop, value: obj[prop] });
    }
  }

  // Перебор всех свойств объекта для сортировки оставшихся свойств
  for (const prop in obj) {
    if (!order.includes(prop)) {
      restProps.push({ key: prop, value: obj[prop] });
    }
  }

  // Сортировка оставшихся свойств по алфавиту
  restProps.sort((a, b) => a.key.localeCompare(b.key));

  // Объединение отсортированных массивов
  return [...orderedProps, ...restProps];
}