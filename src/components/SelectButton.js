function SelectButton(props) {
    // select --- need to add onChange={ props.handleChange }
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <label htmlFor={ props.name } className="mr-1 text-blue-500 text-xs sm:text-sm tracking-wide uppercase">{ props.label }</label>
            <select value="pets"
                className="duration-150 border-2 border-black text-gray-500 hover:text-blue-600 rounded-md px-3 py-1.5 mb-2 hover:border-blue-600 focus:border-blue-600 focus:border-opacity-50"
            >
                {/* eslint-disable-next-line react/prop-types */}
                {props.options.map((option, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <option key={ index } value={ option.value }>{ option.label }</option>
                ))}
            </select>
        </div>
    )
}


export default SelectButton