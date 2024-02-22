import Character from '../Character'

test('проверяем: если символов в имени столько сколько нужно', () => {
    const oleg = {name: 'Oleg', health: 100, level: 1};
    const result = new Character('Oleg');
    
    expect(result).toEqual(oleg);
});

test('проверяем: если символов в имени больше или меньше', () => {
    // const oleg = {name: 'Oleg', health: 100, level: 1};
    // const result = new Character('Oleg');
    
    expect(() => new Character('O')).toThrowError("10 >= name >= 2");
    expect(() => new Character('Olegggggggggggggggggggggggg')).toThrowError("10 >= name >= 2");
});

