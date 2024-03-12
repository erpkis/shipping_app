interface Field {
    id: number;
    name: string;
    label: string;
    type: string; // number, text etc.
}

const Form = (fields: Field[], onSubmit: () => {}) => {
    return (
        <form onSubmit={onSubmit}>
            {fields.map(field => (
            <div key={field.id}>
                <label htmlFor={field.name}>{field.label}</label>
                <input type={field.type} name={field.name} />
            </div>
            ))}
            <button type="submit">Zatwierdź</button>

        </form>
    )
}

export default Form
