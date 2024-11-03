import { Flex } from "@chakra-ui/react";
import { MagnifierInput } from "./shared/inputs";
import { MenuDropdown } from "./shared/dropdowns";

export default function Header() {
  return (
    <header className='bg-indigo-600 border-2 border-indigo-500'>
      <Flex className='lg:container mx-auto gap-2' alignItems='center' justifyContent='space-between'>
        <div>
          <svg fill="#000000" role="img" xmlns="http://www.w3.org/2000/svg" height="48px" width="96px" viewBox="0 0 60 32">
            <title>Clear sky</title>
            <g xmlns="http://www.w3.org/2000/svg" fill="none">
              <circle cx="16" cy="16" r="16" fill="#0072FF"/>
              <path fill="#FFF" d="M24.027 12.803L19.215 23.5h-1.923l5.065-11.26a5.384 5.384 0 011.67.563zm-8.42-6.284L8.204 22.978C6.316 22.082 5 20.119 5 17.833c0-3.13 2.462-5.666 5.5-5.666 0-2.995 2.254-5.44 5.107-5.648zm5.894 5.648L16.402 23.5h-2.083l6.402-14.23c.493.848.78 1.836.78 2.897zm1.894 10.982l3.266-7.256c.216.608.339 1.26.339 1.943 0 2.438-1.5 4.515-3.605 5.313zm1.442-9.814c.456.36.86.788 1.186 1.279l-3.986 8.858a5.025 5.025 0 01-.536.028h-1.236l4.572-10.165zM16.02 6.5c.78.003 1.519.174 2.19.481L10.78 23.5h-.28c-.69 0-1.35-.136-1.957-.377L16.02 6.5zm4.267 2.118L13.592 23.5h-2.246l7.327-16.285c.622.358 1.17.836 1.614 1.403z"/>
            </g>
            <path xmlns="http://www.w3.org/2000/svg" d="M7.387 13.656c0 1.423-.933 2.454-2.823 2.675-1.35.147-3.337-.025-4.294-.148-.025-.147-.074-.343-.074-.49 0-1.252.663-1.522 1.3-1.522.664 0 1.694.123 2.455.123.834 0 1.104-.295 1.104-.565 0-.368-.343-.515-1.006-.638l-1.767-.343C.785 12.453 0 11.423 0 10.343c0-1.325.933-2.454 2.798-2.65 1.398-.148 3.116.024 4.049.122.024.172.049.32.049.491 0 1.252-.663 1.522-1.276 1.522-.491 0-1.227-.099-2.086-.099-.884 0-1.227.246-1.227.54 0 .32.343.442.883.54l1.718.32c1.742.294 2.479 1.3 2.479 2.527m3.092 1.521c0 .761-.295 1.203-1.792 1.203-.196 0-.368-.025-.54-.05V6.22c0-.76.27-1.57 1.767-1.57.196 0 .393.024.565.049zm6.085 3.927c.197.098.59.22 1.105.245.859.025 1.325-.319 1.693-1.08L24 7.913a2.5 2.5 0 0 0-.957-.22c-.589 0-1.399.122-1.914 1.325l-1.497 3.534-2.945-4.81c-.196-.05-.662-.148-1.006-.148-1.03 0-1.62.393-2.233 1.031l-2.871 3.141 2.306 3.632c.418.663.982 1.006 1.89 1.006.589 0 1.104-.147 1.325-.245l-2.773-4.196 1.963-2.086 3.24 5.08Z" transform="translate(35, 5)"/>
          </svg>
        </div>
        <div className='flex-grow' style={{ maxWidth: '780px' }}>
          <MagnifierInput></MagnifierInput>
        </div>
        <Flex alignItems='center' justifyContent='space-between' gap='4'>
          <button className='bg-white rounded-md ps-4 pe-4 p-2 font-semibold'>
            <div className='flex justify-between items-center gap-2'>
              <div>🇬🇧</div>
              <div>EN</div>
              <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
          <MenuDropdown items={[
            {label: 'Account settings', href: '#'},
            {label: 'Account', href: '#'},
            {label: 'Support', href: '#'},
            {label: 'License', href: '#'},
          ]}>
          </MenuDropdown>
        </Flex>
      </Flex>
    </header>
  );
};