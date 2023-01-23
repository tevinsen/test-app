import classNames from 'classnames';
import { DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction } from 'react';
import Checkmark from 'src/assets/icons/Checkmark.svg';
interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	label?: string;
	name: string;
	description: string;
	price: string;
	selectedPackage: string;
	setSelectedPackage: Dispatch<SetStateAction<string>>;
}

export default function PackageSelect({ label, ...props }: InputProps) {
	let out = props.price == 'POA' ? '' : 'per month';
	return (
		<div className="mb-2.5 flex flex-col xl:w-[255px]">
			<div className="flex flex-row justify-between w-full rounded-t-md border border-gray-300 dark:border-slate-600 px-4 relative">
				{label && (
					<label className={classNames('text-sm mt-2.5 mb-2.5 block font-semibold text-ime-dark dark:text-white')} htmlFor={props.name}>
						{label}
					</label>
				)}
				<input
					checked={props.name === props.selectedPackage}
					type="radio"
					onChange={() => {
						props.setSelectedPackage(props.name);
					}}
					className={classNames(
						'peer outline-none bg-[transparent] appearance-none w-6 h-6 rounded-md border checked:bg-ime-accent checked:border-ime-accent border-gray-300 dark:border-slate-600 my-2 placeholder:text-gray-400 text-gray-700 dark:text-white'
					)}
				/>
				<div className="opacity-0 peer-checked:opacity-100 right-4 top-2 text-white absolute w-[21px] h-[21px] flex items-center justify-center pointer-events-none">
					<Checkmark></Checkmark>
				</div>
			</div>

			<div className="p-4 border-x border-b border-gray-300 dark:border-slate-600 lg:h-[160px] xl:h-[178px]">
				<p className="text-slate-500 dark:text-slate-400 flex flex-row items-center">
					<span className="text-ime-dark dark:text-white text-semibold text-xl mr-1.5"> {props.price} </span>
					{out}
				</p>
				<p className="text-slate-500 dark:text-slate-400">{props.description}</p>
			</div>
		</div>
	);
}
