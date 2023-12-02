const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async (id) => {
    return (await fetch(`${URL}/${id}`)).json()
};

export default getProduct;