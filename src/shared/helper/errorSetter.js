export const errorSetter = (error, setError) => {
    Object.entries(error?.response?.data?.details)?.map(([key, value]) => {
        setError(key, { message: value })
    })
};
