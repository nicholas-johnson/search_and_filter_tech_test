import React from 'react';
import { IAppData } from '../../../types/IAppData';
import './styles.scss';

interface IProps {
    result: IAppData;
}

const Result: React.FC<IProps> = ({ result }) => (
    <div className="app-result">
        <h2>{result.name}</h2>
        <p>&pound;{result.spend}</p>
    </div>
)

export default Result;