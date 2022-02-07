import instanceAxios from '../axios/axios';

const baseUrl = '/api/pet';

const getAll = async () => {
    const response = await instanceAxios.get(baseUrl);
    return response.data;
};

const createNew = async ({ name, age, typePet, color }) => {
    const newPet = { name, age, typePet, color };
    const response = await instanceAxios.post(baseUrl, newPet);
    return response.data;
};

const update = (id, newPet) => {
    const request = instanceAxios.put(`${baseUrl}/${id}`, newPet);
    return request.then(response => response.data);
};

export default { getAll, createNew, update };