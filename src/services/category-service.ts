import { ICategory } from "../types/ICategory";

const maxDepth = 3;

const makeCategory = (name: string, depth: number): ICategory => {
    const category: ICategory = {
        name: `${name}`,
        children: [],
    }

    if (depth < maxDepth) {
        const category1: ICategory = makeCategory(`${name}.1`, depth + 1);
        const category2: ICategory = makeCategory(`${name}.2`, depth + 1);
        const category3: ICategory = makeCategory(`${name}.3`, depth + 1);
        category.children = [category1, category2, category3];
    }

    return {
        ...category,
        name: category.name.replace('category.', 'category '),
    }
}

export const makeHierarchy = () => makeCategory('category', 0);

export const hierarchy = makeHierarchy();
