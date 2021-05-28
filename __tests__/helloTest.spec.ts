import { condicaoMagica } from '../src/hello';

describe('Hello Test', () => {
    it('should return true', () => {
        expect(condicaoMagica()).toBe(true);
    });
});
