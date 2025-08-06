import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Conference", href: "/about" },
  { label: "Speakers", href: "/speakers" },
  {
    label: "Committees",
    href: "/advisory-committee",
    hasDropdown: true,
    subItems: [
      "Steering Committee",
      "Advisory Committee",
      "Technical Program Committee",
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Important Dates", href: "/important-dates" },
  { label: "Submission Guidelines", href: "/submission-guidelines" },
  { label: "Publication", href: "/publication" },
  { label: "In and Around Kanpur", href: "/kanpur" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#1B305C] text-[#FEFBFB] font-bold text-sm tracking-wide">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Mobile menu button */}
        <div className="lg:hidden flex justify-between items-center py-4">
          <div className="text-lg font-semibold">ICRAECCTSF</div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop navbar */}
        <div className="hidden lg:flex justify-center items-center h-[50px] space-x-6">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              {/* Menu item */}
              <div className="flex items-center gap-1 hover:text-yellow-300">
                <a href={item.href}>{item.label}</a>
                {item.hasDropdown && <FaChevronDown className="text-xs mt-[1px]" />}
              </div>

              {/* Desktop dropdown */}
              {item.hasDropdown && (
                <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-[#1B305C] text-white rounded shadow-lg z-50 min-w-[200px]">
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                      className="px-4 py-2 text-sm hover:text-yellow-300"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden py-3 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-white/30 pb-2">
                <div
                  className="flex items-center justify-between text-white hover:text-yellow-300"
                  onClick={() =>
                    item.hasDropdown ? toggleDropdown(index) : setMenuOpen(false)
                  }
                >
                  <a href={item.href}>{item.label}</a>
                  {item.hasDropdown && (
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Mobile dropdown */}
                {item.hasDropdown && openDropdown === index && (
                  <div className="mt-2 pl-4 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setMenuOpen(false)}
                        className="block text-sm text-white hover:text-yellow-300"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
