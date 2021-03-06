import Styles from './style.module.scss';

type Props = {
    title: string;
    wrapperStyle?: string;
    titleStyle?: string;
    onClick?: () => void;
};
const Button = ({ title, wrapperStyle, titleStyle, onClick }: Props) => (
    <button
        className={`${Styles.wrapper} ${wrapperStyle}`}
        type="button"
        onClick={onClick}
    >
        <p className={`${Styles.title} ${titleStyle}`}>{title}</p>
    </button>
);

export default Button;
