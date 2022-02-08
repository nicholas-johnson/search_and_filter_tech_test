import { ICategory } from '../types/ICategory';
import { makeHierarchy } from './category-service';

describe('makeHierarchy', () => {
    let hierarchy: ICategory;
    beforeEach(() => {
        hierarchy = makeHierarchy();
    })

    it('creates a hierarchy', () => {
        expect(hierarchy).toBeDefined();
    })

    it('has a name', () => {
        expect(hierarchy.name).toBe('category')
    })

    it('has 3 children', () => {
        expect(hierarchy.children.length).toBe(3)
    })

    it('has well formed', () => {
        expect(hierarchy.children[0].name).toBe('category 1')
    })
})