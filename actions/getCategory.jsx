const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async (id) => {
    return (await fetch(`${URL}/${id}`)).json()
};

export default getCategory;