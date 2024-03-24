const { useMutation } = require("react-query")

const useLogin = () =>{
    const mutate = useMutation({
        mutationFn: async (data) => {
            const res = await axios.post('/login', data)
            return res.data
        },
        onSuccess: (data) => {
            localStorage.setItem('token', data.data.token)
        }
    });
    return mutate;
};
export default useLogin;