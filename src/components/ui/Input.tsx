import classNames from "classnames";
import { useField } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { codes } from "src/lib/business-sign-up/country_codes";
interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name: string;
  contact?: boolean;
  setCountryCode?: (field: string, value: any) => void;
}

export default function Input({ label, ...props }: InputProps) {
  const [field, meta] = useField(props.name);
  const [country, setCountry] = useState("+27");
  return (
    <div className="mb-4 relative">
      {label && (
        <label
          className={classNames(
            "text-sm mb-[6px] block font-semibold text-ime-dark dark:text-white"
          )}
          htmlFor={props.name}
        >
          {label}
        </label>
      )}
      {props.contact && (
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            props.setCountryCode?.("dialingCode", e.target.value);
          }}
          className="absolute top-[30px] bottom-2 left-2.5 w-[57px] h-5 border-none bg-transparent text-sm text-ime-dark dark:text-white"
        >
          {codes.map((option) => {
            return (
              <option key={option.name} value={option.code}>
                {option.code}
              </option>
            );
          })}
        </select>
      )}

      <input
        className={classNames(
          "w-full outline-none bg-[transparent] border rounded-md border-gray-300 dark:border-slate-600 h-9 px-[10px] py-[10px] placeholder:text-gray-400 dark:placeholder:text-slate-500 text-ime-dark dark:text-white",
          {
            "bg-gray-200": props.disabled,
            "border-red-700 dark:border-red-700": meta.touched && meta.error,
            "pl-[74px]": props.contact,
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
