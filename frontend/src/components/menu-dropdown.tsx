type MenuItem = {
  label: string,
  href: string,
};

type MenuDropdownProps = {
  items: MenuItem[];
};

export default function MenuDropdown({ items }: MenuDropdownProps) {
  function onClick() {
    const menu = document.getElementById('dropdownMenu');
    menu?.classList.toggle('hidden');
  }
  
  return (
    <>
      <div className="relative">
        <button className='bg-indigo-600 p-3 rounded-md' onClick={onClick}>
          <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="25" height="3" fill="white"/>
            <rect y="7" width="25" height="3" fill="white"/>
            <rect y="14" width="25" height="3" fill="white"/>
          </svg>
        </button>

        <div id="dropdownMenu" className="hidden absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Account settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Support</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">License</a>
            <form method="POST" action="#">
              <button type="submit" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</button>
            </form> */}
          </div>
        </div>
      </div>
    </>
  );
};