const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async () => {
    return (await fetch(URL)).json()
};

export default getSizes;