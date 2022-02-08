import React from 'react';
import { ICategory } from '../../../types/ICategory';
import Category from './Category';
import './styles.scss';

interface IProps {
    root: ICategory;
    selected: ICategory | null;
    onSelect: (category: ICategory | null) => void
    topLevel?: boolean;
}

const Hierarchy: React.FC<IProps> = ({ root, onSelect, selected, topLevel }) => (
    <ul className="app-hierarchy">
        <li>
            {
                topLevel
                    ? <button onClick={() => onSelect(null)}>Show All</button>
                    : <Category
                        category={root}
                        onSelect={onSelect}
                        selected={selected}
                    />
            }
            {
                root.children.length > 0
                    ? root
                        .children
                        .map(child =>
                            <Hierarchy
                                root={child}
                                onSelect={onSelect}
                                key={child.name}
                                selected={selected}
                            />
                        )
                    : null
            }
        </li>
    </ul>
)

export default Hierarchy;