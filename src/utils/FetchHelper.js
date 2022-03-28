import axios from 'axios';

class FetchHelper {
    request = async ({ ...options }) => {
        try {
            const response = await axios(options);
            const { data } = response;
            return data;
        } catch (e) {
            throw new Error(e);
        }
    };

    get({ url }) {
        return this.request({ method: 'GET', url });
    }

    post({ url, data }) {
        return this.request({ method: 'GET', url, data });
    }
}

export default new FetchHelper();
