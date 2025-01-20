/* eslint-disable no-irregular-whitespace */
import { motion } from "framer-motion";

const Information = () => {
	return (
		<section
			id="Information"
			className="w-full px-[14%] flex h-fit flex-col justify-center bg-green-900 text-white sm:px-4"
		>
			<div className="w-full max-w-[70rem] mx-auto py-14">
				{/* Section Title */}
				<div className="text-center mb-10">
					<motion.h3
						className="text-4xl font-bold sm:text-3xl"
						whileInView={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						transition={{ duration: 0.8 }}
					>
						تفاصيل المسجد
					</motion.h3>
				</div>

				{/* Content Rows */}
				<div className="flex flex-col gap-20">
					{/* First Row */}
					<div className="flex flex-items-center gap-8 max-lg:flex-col items-center">
						<motion.img
							whileInView={{ x: 0, opacity: 1 }}
							initial={{ x: 100, opacity: 0 }}
							viewport={{ once: false, amount: 0.2 }}
							transition={{ duration: 1 }}
							className="rounded-xl w-full max-w-[500px] h-auto max-lg:text-center"
							src="/image.png"
							alt="مسجد الوزير"
						/>
						<motion.p
							whileInView={{ x: 0, opacity: 1 }}
							initial={{ x: -100, opacity: 0 }}
							viewport={{ once: false, amount: 0.2 }}
							transition={{ duration: 1 }}
							className="text-2xl opacity-80 text-left sm:text-lg"
						>
							يسرنا أن نعلن عن بدء بناء مسجد الوزير في شارع أبو زيد عامر، وهو
							مشروع خيري يهدف إلى إنشاء بيت من بيوت الله لخدمة المجتمع ونشر
							الخير. ندعوكم للمشاركة في هذا العمل الصالح بالتبرع لبناء المسجد،
							ومن يساهم في هذا المشروع سنكتب اسمه في سجل الخيرين في المسجد.
						</motion.p>
					</div>

					{/* Second Row */}
					<div className="flex flex-items-center gap-8 items-center max-lg:flex-col-reverse">
						<motion.p
							whileInView={{ x: 0, opacity: 1 }}
							initial={{ x: -100, opacity: 0 }}
							viewport={{ once: false, amount: 0.2 }}
							transition={{ duration: 1 }}
							className="text-2xl opacity-80 text-right sm:text-lg max-lg:text-center"
						>
							مسجد الوزير في شارع أبو زيد عامر يحتاج إلى دعمكم ليكتمل بناؤه
							ويصبح مركزًا للعبادة والعلم. تبرعك اليوم هو صدقة جارية ترفع بها
							درجاتك وتُخلد اسمك في سجل الخيرين. ساهم معنا في بناء هذا الصرح
							العظيم وكن جزءًا من هذا الأجر العظيم.
						</motion.p>
						<motion.img
							whileInView={{ x: 0, opacity: 1 }}
							initial={{ x: 100, opacity: 0 }}
							viewport={{ once: false, amount: 0.2 }}
							transition={{ duration: 1 }}
							className="rounded-xl w-full max-w-[500px] h-auto"
							src="/image.png"
							alt="مسجد الوزير"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Information;
