import { expect } from 'chai';
import { rules } from '../index';

describe('rules', () => {
	describe('when called', () => {
		let actual: object;
		before(() => {
			actual = rules;
		});
		it('should be defined', () => {
			expect(actual).to.exist;
		});
		it('should be of type object', () => {
			expect(actual).to.be.an('object');
		});
	});
});

