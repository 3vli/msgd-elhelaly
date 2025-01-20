/* eslint-disable no-irregular-whitespace */
import { motion } from "motion/react";
const Hero = () => {
	return (
		<>
			<section id="hero" className="py-[14%]">
				<motion.img
					className="w-full absolute left-0 h-screen top-0 opacity-20 -z-30"
					src="/image.png"
					alt=""
				/>
				<motion.div
					initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
					className="text-center justify-center items-center mt-30 flex flex-col z-30"
				>
					<h1 className="bold text-4xl">هيا ليبني الله لك بيتا في الجنة</h1>
					<p className="text-xl opacity-80 my-7  max-w-[296px]">
						 إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ
						وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلاةَ وَآتَى الزَّكَاةَ وَلَمْ
						يَخْشَ إِلَّا اللَّهَ فَعَسَى أُولَئِكَ أَنْ يَكُونُوا مِنَ
						الْمُهْتَدِينَ.  
					</p>
					<motion.a
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ duration: 1 }}
						className="py-4 px-8 bg-[#31751D] rounded-md cursor-pointer transition-all hover:scale-90 inline-flex z-20"
						href="#footer"
					>
						تبرع الان
					</motion.a>
				</motion.div>
			</section>
		</>
	);
};

export default Hero;
