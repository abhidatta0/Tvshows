import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Styles from './style.module.scss';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}
class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    // componentDidCatch(error: Error, errorInfo: ErrorInfo){
    //     console.log(error, errorInfo);
    // }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError)
            <div className={Styles.wrapper}>
                <p className={Styles.errorText}>Oops! Something broke</p>
                <Link to="/">Go To Home</Link>
            </div>;
        return children;
    }
}

export default ErrorBoundary;
