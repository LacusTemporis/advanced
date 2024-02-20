import { orderByProps } from "../orderByProps";

describe('orderByProps', () => {
  test('should sort properties by the given order and then alphabetically', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const result = orderByProps(obj, ['name', 'level']);
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];

    expect(result).toEqual(expected);
  });

  test('should handle an empty order array', () => {
    const obj = { health: 10, attack: 80 };
    const result = orderByProps(obj, []);
    const expected = [
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
    ];

    expect(result).toEqual(expected);
  });

  test('should handle an object with properties not mentioned in the order', () => {
    const obj = { health: 10, attack: 80, stamina: 50 };
    const result = orderByProps(obj, ['stamina']);
    const expected = [
      { key: 'stamina', value: 50 },
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
    ];

    expect(result).toEqual(expected);
  });

  test('should ignore non-existent properties mentioned in the order', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    // Добавляю в массив свойство, которого нет в объекте
    const order = ['nonExistentProperty', 'name', 'level'];
    const result = orderByProps(obj, order);
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];

    expect(result).toEqual(expected);
  });
});