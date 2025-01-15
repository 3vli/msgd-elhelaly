import { motion } from "framer-motion";

const Information = () => {
  return (
    <motion.section
      id="Information"
      className="w-full min-h-screen px-[14%] mt-32 mb-60 flex flex-col justify-center bg-green-900 text-white sm:px-4"
    >
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
        <div className="flex flex-col-reverse items-center gap-8 md:flex-col">
          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -400, opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl opacity-80 text-center sm:text-lg"
          >
            يسرنا أن نعلن عن بدء بناء مسجد الوزير في شارع أبو زيد عامر، وهو مشروع
            خيري يهدف إلى إنشاء بيت من بيوت الله لخدمة المجتمع ونشر الخير.
            ندعوكم للمشاركة في هذا العمل الصالح بالتبرع لبناء المسجد، ومن يساهم
            في هذا المشروع سنكتب اسمه في سجل الخيرين في المسجد.
          </motion.p>
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 500, opacity: 0 }}
            transition={{ duration: 1 }}
            className="rounded-xl w-full max-w-[500px] h-auto"
            src="/public/image1.png"
            alt="مسجد الوزير"
          />
        </div>

        {/* Second Row */}
        <div className="flex flex-col items-center gap-8 md:flex-col">
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -500, opacity: 0 }}
            transition={{ duration: 1 }}
            className="rounded-xl w-full max-w-[500px] h-auto"
            src="/public/image1.png"
            alt="مسجد الوزير"
          />
          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 500, opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl opacity-80 text-center sm:text-lg"
          >
            مسجد الوزير في شارع أبو زيد عامر يحتاج إلى دعمكم ليكتمل بناؤه ويصبح
            مركزًا للعبادة والعلم. تبرعك اليوم هو صدقة جارية ترفع بها درجاتك
            وتُخلد اسمك في سجل الخيرين. ساهم معنا في بناء هذا الصرح العظيم وكن
            جزءًا من هذا الأجر العظيم.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Information;
