import classNames from "classnames";
import { useField } from "formik";
import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label?: string;
  name: string;
}

export default function Select({ label, ...props }: InputProps) {
  const [field, meta] = useField(props.name);
  return (
    <div className="mb-4">
      {label && (
        <label
          className={classNames(
            "text-sm mb-[6px] block font-semibold text-gray-800 dark:text-white"
          )}
          htmlFor={props.name}
        >
          {label}
        </label>
      )}
      <select
        className={classNames(
          "w-full outline-none bg-[transparent] border border-gray-300 dark:border-slate-600 h-9 px-[10px] placeholder:text-gray-400 text-gray-700 dark:text-white",
          {
            "bg-gray-200": props.disabled,
            "border-red-700 dark:border-red-700": meta.touched && meta.error,
          }
        )}
        {...field}
        {...props}
      />
      {meta.error && meta.touched && (
        <div className="mt-1 ml-2 text-xs text-red-700">{meta.error}</div>
      )}
    </div>
  );
}
