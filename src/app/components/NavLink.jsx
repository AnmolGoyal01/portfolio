import Link from "next/link";

const NavLink = ({ href, title }) => {
  const handelClick = (e)=>{
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <Link
      href={href}
      onClick={e=>handelClick(e)}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
