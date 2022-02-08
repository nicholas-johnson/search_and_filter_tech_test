import { IAppData } from "../types/IAppData";
import { ICategory } from "../types/ICategory";

export const filterData = (data: IAppData[], maxSpend: number, category: ICategory | null) => {
    const filteredData = data.filter(data => data.spend <= maxSpend)
    if (!category) return filteredData;

    return filteredData.filter(({ cat1, cat2, cat3 }) => {
        const { name } = category;
        if (name === cat1) return true;
        if (name === cat2) return true;
        if (name === cat3) return true;
        return false;
    });
}