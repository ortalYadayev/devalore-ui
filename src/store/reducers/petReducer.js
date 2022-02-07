import petsService from "../../services/pets";

// eslint-disable-next-line default-param-last
const petReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_PET':
            return [...state, action.data]
        case "INIT_PETS":
            return action.data;
        default:
            return state
    }
}

export const createPet = (name, age, typePet, color) => async dispatch => {
    const newPet = await petsService.createNew({
        name, age, typePet, color
    });

    dispatch({
        type: 'NEW_PET',
        data: newPet
    })
}

export const initializePets = () => async dispatch => {
        const pets = await petsService.getAll();

        dispatch({
            type: "INIT_PETS",
            data: pets,
        })
    };

export default petReducer;