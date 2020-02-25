import { helloTest } from '../src/hello';

describe('Hello Test', () => {
    it('should return true', () => {
        expect(helloTest()).toBe(true);
    });
});
