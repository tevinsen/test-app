import Lottie from 'lottie-react';
import Animation from 'src/assets/email-animation.json';
import { useEffect, useState } from 'react';
import SignUpLayout from 'src/layout/business-sign-up/SignUpLayout';
import { useRouter } from 'next/router';

export default function Verification() {
	const router = useRouter();
	const formData = router.query;
	const [email, setEmail] = useState(formData.email?.toString());

	useEffect(() => {
		if (!email) {
			router.replace('/business-sign-up/');
		}
	}, [email]);

	return (
		<SignUpLayout>
			<div className="flex flex-col grow md:justify-center items-center mt-8 md:mt-0">
				<Lottie className="w-[230px] h-[230px]" animationData={Animation} loop={true}></Lottie>
				<h1 className="text-ime-dark dark:text-white font-semibold">Check your email</h1>
				<p className="text-center text-slate-500 dark:text-slate-400 mt-1">
					We’ve sent a verification link to <span className="text-ime-dark dark:text-white">{email}</span>
				</p>
			</div>
		</SignUpLayout>
	);
}
