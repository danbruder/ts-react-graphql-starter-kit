import {Arrays} from '../arrays';
describe('Arrays', () => {
  describe('index', () => {
    it('is a prism for the specified index', () => {
      const a = [1,2,3];

      expect(Arrays.index(-1)(a)).toBe(undefined);
      expect(Arrays.index(0)(a)).toBe(1);
      expect(Arrays.index(1)(a)).toBe(2);
      expect(Arrays.index(2)(a)).toBe(3);
      expect(Arrays.index(3)(a)).toBe(undefined);

      const b = Arrays.index(2).set(a,5);
      const c = Arrays.index(3).set(a,9999);

      expect(a).toEqual([1,2,3]);
      expect(b).toEqual([1,2,5]);
      expect(c).toEqual([1,2,3]);
      expect(c).toBe(a);
    });
  });

  describe('.splice', () => {
    it('works like Array#splice but copies', () => {
      const splice = Arrays.splice;

      const splice1 = [1,2,4]
      splice1.splice(0, 0, 3);
      expect(splice1).toEqual([3,1,2,4]);

      const a = [1,2,4];
      expect(splice(a, 0, 0, 3)).toEqual([3,1,2,4]);

      const splice2 = [1,2,4];
      splice2.splice(2,1,3);
      expect(splice2).toEqual([1,2,3]);
      expect(splice(a, 2, 1, 3)).toEqual([1, 2,3]);

      //more examples
      expect(splice([1, 2, 3], 1, 1, 4, 5)).toEqual([1,4,5,3]);
      expect(splice([1, 2, 3], 1, 2)).toEqual([1]);
    })
  });

  describe('.push', () => {
    it('works like Array#push but copies', () => {
      const push = Arrays.push;

      const a : number[] = [0];
      expect(push(a,1)).toEqual([0, 1]);
      expect(push(a,2)).toEqual([0, 2]);
      expect(a).toEqual([0]);
    })
  });

  describe('.pop', () => {
    it('works like Array#pop but copies', () => {
      const pop = Arrays.pop;

      const a : number[] = [0, 1];
      expect(pop(a)).toEqual([0]);
      expect(a).toEqual([0, 1]);

      expect(pop([])).toEqual([])
    })
  });

  describe('.unshift', () => {
    it('works like Array#unshift but copies', () => {
      const unshift = Arrays.unshift;

      const a : number[] = [0];
      expect(unshift(a,1)).toEqual([1, 0]);
      expect(unshift(a,2)).toEqual([2, 0]);
      expect(a).toEqual([0]);
    })
  });
})