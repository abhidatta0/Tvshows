import Styles from './Pagination.module.scss';

type Props = {
    elementsPerPage: number;
    totalElements: number;
    currentPage: number;
    setCurrentPage: Function;
    customStyle?: string;
};

const Pagination = ({
    elementsPerPage,
    totalElements,
    setCurrentPage,
    currentPage,
    customStyle,
}: Props) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={customStyle}>
            {pageNumbers.map((number) => (
                <span
                    className={`${Styles.page} ${
                        currentPage === number ? Styles.currentPage : null
                    }`}
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    role="button"
                    tabIndex={0}
                >
                    {number}
                </span>
            ))}
        </nav>
    );
};

export default Pagination;
