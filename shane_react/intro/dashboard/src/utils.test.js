import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('série de plusieurs tests', () => {
	test('test de la fonction getFullYear', () => {
		const goodDate = new Date().getFullYear();
		expect(getFullYear()).toBe(goodDate);
	});
	test('test de getFooterCopy pour savoir si il retourne bien la phrase attendue', () => {
		expect(getFooterCopy(true)).toBe('isIndex is true');
		expect(getFooterCopy(false)).toBe('isIndex is false');
	});
	test('test du retour de getLatestNotification', () => {
		expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
	});
});
