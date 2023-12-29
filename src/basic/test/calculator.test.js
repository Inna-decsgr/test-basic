const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let cal;
  beforeEach(()=> {
    cal = new Calculator();
  })

  it('inits with 0', ()=> {
    expect(cal.value).toBe(0);
  });

  it('sets', ()=> {
    cal.set(9);

    expect(cal.value).toBe(9)
  });

  it('clear', ()=> {
    cal.set(9);
    cal.clear();

    expect(cal.value).toBe(0)
  });

  it('adds', () => {
    cal.set(1);
    cal.add(2);

    expect(cal.value).toBe(3);
  });

  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      cal.add(101);
    }).toThrow('Value can not be greater than 100');

  })

  it('subtracts', () => {
    cal.set(4);
    cal.subtract(2);
    expect(cal.value).toBe(2);
  });

  it('multiplies', () => {
    cal.set(4);
    cal.multiply(3);

    expect(cal.value).toBe(12);
  });

  describe('divide', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('3/3 === 1', () => {
      cal.set(3);
      cal.divide(3);

      expect(cal.value).toBe(1);
    })
  })
})