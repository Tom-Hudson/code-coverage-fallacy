const { add } = require('./add');

describe('add', () => {
    it('should NOT return null', () => {
        const actual = add(1);

        expect(actual).not.toEqual(null);
    });
});