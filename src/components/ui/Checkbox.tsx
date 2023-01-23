import classNames from "classnames";
import { useField } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import Checkmark from "src/assets/icons/Checkmark.svg";

interface CheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string | ReactNode;
  name: string;
}

export default function Checkbox({ label, name, ...props }: CheckboxProps) {
  const field_id = `form-field-${name}`;
  const [field, meta] = useField(name);
  return (
    <div className="mb-4">
      <div className={classNames("flex items-center relative")}>
        <input
          id={field_id}
          type="checkbox"
          className={classNames(
            "peer cursor-pointer appearance-none w-6 h-6 rounded-md mr-[10px] bg-transparent border border-gray-300 dark:border-slate-600 checked:bg-ime-accent checked:border-ime-accent",
            {},
            props.className
          )}
          {...field}
          {...props}
        />
        <div className="opacity-0 peer-checked:opacity-100 text-white absolute w-[21px] h-[21px] flex items-center justify-center pointer-events-none">
          <Checkmark></Checkmark>
        </div>
        {label && (
          <label
            className={classNames(
              "text-ime-dark cursor-pointer dark:text-white"
            )}
            htmlFor={field_id}
          >
            {label}
          </label>
        )}
      </div>
      {meta.error && meta.touched && (
        <div className="mt-1 ml-2 text-xs text-red-700">{meta.error}</div>
      )}
    </div>
  );
}
