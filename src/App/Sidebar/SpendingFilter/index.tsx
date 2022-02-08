import React, { ChangeEvent, useEffect, useState } from 'react';
import { getMinMaxSpending } from '../../../services/spending-service';
import { IAppData } from '../../../types/IAppData';
import './style.scss';

interface IProps {
    data: IAppData[];
    value: number;
    onChange: (value: number) => void;
}

const SpendingFilter: React.FC<IProps> = ({
    data,
    value,
    onChange
}) => {
    const [min, setMin] = useState<number>();
    const [max, setMax] = useState<number>();

    useEffect(() => {
        const { min, max } = getMinMaxSpending(data);
        setMin(min?.spend || 0);
        setMax(max?.spend || 0);
    }, [data])


    if (data.length === 0) return null;

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        onChange(parseInt(evt.target.value));
    }

    return (
        <div className="app-spending-filter">
            <label htmlFor="spending-filter">
                Spending: &pound;{value}
            </label>
            <input
                id="spending-filter"
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
            <div className="min-max">
                <div>&pound;{min}</div>
                <div>&pound;{max}</div>
            </div>
        </div>
    )
}

export default SpendingFilter;