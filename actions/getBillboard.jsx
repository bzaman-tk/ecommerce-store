const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id) => {
    return (await fetch(`${URL}/${id}`)).json()
};

export default getBillboard;