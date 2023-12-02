import qs from 'query-string';
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProducts = async (query) => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    })
    return (await fetch(URL)).json()
};

export default getProducts;