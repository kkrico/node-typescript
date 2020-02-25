import { helloTest } from '../src/hello';

describe('First test', () => {
    it('should return true', () => {
        expect(helloTest()).toBe(true);
    });
});
