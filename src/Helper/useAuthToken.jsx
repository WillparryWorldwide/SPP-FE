import { useAuthHeader } from 'react-auth-kit';

const useAuthToken = () => {
    const token = useAuthHeader();
    return token();
};

export default useAuthToken
