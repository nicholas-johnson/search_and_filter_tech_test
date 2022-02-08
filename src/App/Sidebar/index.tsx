import React from 'react';
import { IAppData } from '../../types/IAppData';
import { ICategory } from '../../types/ICategory';
import Hierarchy from './Hierarchy';
import SpendingFilter from './SpendingFilter';
import './style.scss'

interface IProps {
    data: IAppData[];
    maxSpending: number,
    onMaxSpendingChange: (value: number) => void;
    hierarchy: ICategory;
    onSelectCategory: (category: ICategory | null) => void;
    selectedCategory: ICategory | null;
}

const Sidebar: React.FC<IProps> = ({
    data,
    maxSpending,
    onMaxSpendingChange,
    hierarchy,
    onSelectCategory,
    selectedCategory,
}) => {
    return (
        <div className="app-sidebar">
            <Hierarchy
                root={hierarchy}
                onSelect={onSelectCategory}
                selected={selectedCategory}
                topLevel
            />
            <SpendingFilter
                data={data}
                value={maxSpending}
                onChange={onMaxSpendingChange} />
        </div>
    )
}

export default Sidebar;