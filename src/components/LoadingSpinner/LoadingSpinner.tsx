import Styles from './style.module.scss';

const LoadingSpinner = () => (
    <div className={Styles.spinnerBackground}>
        <div className={Styles.spinner} />
    </div>
);

export default LoadingSpinner;
