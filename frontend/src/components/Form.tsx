import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormField {
    name: string;
    label: string;
    type: string;
  }
  
  interface FormProps {
    fields: FormField[];
    onSubmit: SubmitHandler<any>; // to do
  }

const FormComponent: React.FC<FormProps> = ({ fields, onSubmit }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<any>();
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field : FormField) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            type={field.type}
            {...register(field.name, { required: true })}
          />
          {errors[field.name] && <span>This field is required</span>}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
      );
}

export default FormComponent
