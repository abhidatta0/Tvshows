import Styles from './Tag.module.scss';

type Props = {
    genre: string;
};
const Tag = ({ genre }: Props) => <span className={Styles.tag}>{genre}</span>;

export default Tag;
