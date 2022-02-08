import { IAppData } from '../types/IAppData';
import { filterData } from './filter-service';

describe('filterData', () => {
    let data: IAppData[];
    let spend: number;
    beforeEach(() => {
        spend = 12;
        data = [
            { spend }
        ] as IAppData[];
    });

    it('filters values that are too high', () => {
        const expected: IAppData[] = [];
        const result = filterData(data, spend - 1)
        expect(result).toEqual(expected)
    })

    it('allows values that are low enough', () => {
        const expected = [...data];
        const result = filterData(data, spend + 1)
        expect(result).toEqual(expected)
    })

    it('allows values that are equal', () => {
        const expected = [...data];
        const result = filterData(data, spend)
        expect(result).toEqual(expected)
    })
})