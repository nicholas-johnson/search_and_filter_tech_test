import { IAppData } from "../types/IAppData";

const sort = (data: IAppData[]) => data.sort((a, b) => a.spend < b.spend ? -1 : 1);

export const getMinMaxSpending = (data: IAppData[]) => {
    const sortedData = sort(data);
    const min = sortedData[0];
    const max = sortedData[sortedData.length - 1];
    return { min, max }
}
