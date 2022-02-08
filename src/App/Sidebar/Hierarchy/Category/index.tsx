import { ICategory } from "../../../../types/ICategory";
import './styles.scss';

interface IProps {
    category: ICategory;
    onSelect: (category: ICategory | null) => void;
    selected: ICategory | null;
}

const Category: React.FC<IProps> = ({ category, onSelect, selected }) => {
    const handleOnClick = () => {
        onSelect(category);
    }

    const classNames = [
        'app-category',
        category === selected ? 'selected' : ''
    ].join(' ');

    return (
        <button
            className={classNames}
            onClick={handleOnClick}
        >
            {category.name}
        </button>
    )
}

export default Category;