import { Field, useField } from "formik";

export const InputField = (props) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <Field
        {...field}
        {...props}
        autoComplete="off"
        className={`border-b border-border p-2 text-xl md:text-2xl`}
      />
      {meta.error && <p className="text-red-500 mt-2">{meta.error}</p>}
    </div>
  );
};
