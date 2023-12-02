const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async () => {
    return (await fetch(URL)).json()
};

export default getColors;