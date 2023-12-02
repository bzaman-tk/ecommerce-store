const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async () => {
    return (await fetch(URL)).json()
};

export default getCategories;