import React from 'react';
import Result from './Result';
import { IAppData } from '../../types/IAppData';
import './style.scss';

interface IProps {
    data: IAppData[]
}

const ResultList: React.FC<IProps> = ({ data }) => (
    <ul className="app-result-list">
        {
            data.map(result => (
                <li key={result.id}>
                    <Result result={result} />
                </li>
            ))
        }
    </ul>
)

export default ResultList;