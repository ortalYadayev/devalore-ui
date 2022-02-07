function RadioButton(props) {
    return (
        <div className="flex flex-col mb-4">
            {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
            <label htmlFor={ props.name } className="mb-1 text-blue-500 text-xs sm:text-sm tracking-wide uppercase">{ props.label }</label>
            {
                // eslint-disable-next-line react/prop-types
                props.list.map((value, index) => (
                    <div>
                        {/* eslint-disable-next-line react/no-array-index-key,react/prop-types,react/destructuring-assignment */}
                        <input key={ index } type={ value.field.type } value={ value.value } name={ props.name }
                           className="duration-150 px-3 py-1.5 mb-2"
                        />
                        { value.value }
                    </div>
                ))
            }
        </div>
    )
}


export default RadioButton