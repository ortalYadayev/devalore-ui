import {useState} from "react";
import useField from '../hooks/index';
import {createPet} from "../store/reducers/petReducer";

function PetForm() {
    const namePet = useField('text')
    const agePet = useField('Number')
    const optionsType = [
        {
            label: "Dog",
            value: "dog",
        },
        {
            label: "Cat",
            value: "cat",
        },
        {
            label: "Horse",
            value: "horse",
        },
        {
            label: "Other",
            value: "other",
        },
    ];
    const [type, setType] = useState('')
    const colorList = [ {
        value : 'black',
        field: useField('radio'),
    },{
        value: 'white',
        field: useField('radio'),
    }]
    const maxLengthName = 25

    const handleChange = (event) => {
        setType({type: event.target.value});
    }

    // eslint-disable-next-line consistent-return
    const required = (value) => {
        if (!value.toString().trim().length) {
            return 'require';
        }
    };

    // eslint-disable-next-line consistent-return
    const maxLength = (value) => {
        if (!value.toString().trim().length > maxLengthName) {
            return <span className="error">The name exceeded {maxLengthName} symbols.</span>
        }
    };

    const addPet = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const age = event.target.age.value;
        // const type = event.target.type.value;
        const color = event.target.color.value;
        // eslint-disable-next-line no-param-reassign
        event.target.name.value = '';
        // eslint-disable-next-line no-param-reassign
        event.target.age.value = '';
        // eslint-disable-next-line react/prop-types
        createPet(name, age, type, color)
    }

    return (
        <div className="bg-white rounded-md px-6 sm:px-12 py-10 my-4 w-80">
            <h1 className="text-2xl mb-2">Create a new pet</h1>
            <form
                onSubmit={addPet}
                // ref={c => { this.form = c }} onSubmit={handleSubmit.bind(this)}
                className="flex bg-white flex-col justify-center"
            >
                <div className="flex flex-col mb-4">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="name"
                           className="mb-1 text-blue-500 text-xs sm:text-sm tracking-wide uppercase">name</label>
                    <input
                        name="name"
                        value={namePet.value}
                        type={namePet.type}
                        onChange={namePet.onChange}
                        validations={[required, maxLength]}
                        className="duration-150 border-2 border-black text-gray-500 hover:text-blue-600 focus:text-black rounded-md px-3 py-1.5 mb-2 hover:border-blue-600 focus:border-blue-600 focus:border-opacity-50"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="age"
                           className="mb-1 text-blue-500 text-xs sm:text-sm tracking-wide uppercase">age</label>
                    <input name="age" value={agePet.value}
                    type={agePet.type}
                    onChange={agePet.onChange}
                    min="0"
                    validations={[required]}
                    className="duration-150 border-2 border-black text-gray-500 hover:text-blue-600 focus:text-black rounded-md px-3 py-1.5 mb-2 hover:border-blue-600 focus:border-blue-600 focus:border-opacity-50"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="type" className="mr-1 text-blue-500 text-xs sm:text-sm tracking-wide uppercase">
                        type
                    </label>
                    <select
                        value="pets"
                        className="duration-150 border-2 border-black text-gray-500 hover:text-blue-600 rounded-md px-3 py-1.5 mb-2 hover:border-blue-600 focus:border-blue-600 focus:border-opacity-50"
                    >
                        {/* eslint-disable-next-line react/prop-types */}
                        {optionsType.map((option, index) => (
                            <option
                            // eslint-disable-next-line react/no-array-index-key
                                key={ index }
                                value={ option.value }
                                onChange={handleChange}
                            >
                                { option.label }
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col mb-4">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label
                        htmlFor="color"
                        className="mb-1 text-blue-500 text-xs sm:text-sm tracking-wide uppercase">
                        color
                        </label>
                    {
                        // eslint-disable-next-line react/prop-types
                        colorList.map((value, index) => (
                            <div>
                                {/* eslint-disable-next-line react/no-array-index-key,react/prop-types,react/destructuring-assignment */}
                                <input key={ index } type={ value.field.type } value={ value.value } name="color"
                                       className="duration-150 px-3 py-1.5 mb-2"
                                />
                                { value.value }
                            </div>
                        ))
                    }
                </div>
                <button
                    className="w-full border-2 border-blue-500 bg-blue-500 text-lg text-gray-rgb uppercase rounded-lg py-1 sm:py-2"
                    type="submit">create</button>
            </form>
        </div>
    )
}

export default PetForm