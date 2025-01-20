import { useState } from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const toggle = () => {
		setToggleMenu((prev) => !prev);
	};

	return (
		<header className="w-full bg-opacity-0 z-50 fixed top-0">
			<div className="flex justify-between container mx-auto px-8  py-6">
				<div>
					<a className="tracking-tighter text-2xl" href="">
						اهل الخير
					</a>
				</div>

				{/* Navigation: Hidden on small screens, toggled with state */}
				<nav
					className={`${
						toggleMenu ? "block" : "hidden"
					} absolute top-16 right-0 bg-neutral-900 max-[600px]:border-2 md:border-neutral-100 shadow-md p-5 flex flex-col gap-5 md:static md:flex md:flex-row md:bg-transparent md:shadow-none`}
				>
					<a href="#hero" className="hover:text-blue-500">
						صفحة الرئيسية
					</a>
					<a href="#Information" className="hover:text-blue-500">
						تفاصيل المسجد
					</a>
					<a href="#footer" className="hover:text-blue-500">
						التواصل
					</a>
				</nav>

				{/* Menu Icon: Visible on small screens */}
				<div className="md:hidden" onClick={toggle}>
					{toggleMenu ? (
						<IoCloseSharp className="cursor-pointer" size={30} />
					) : (
						<IoMenuSharp className="cursor-pointer" size={30} />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
