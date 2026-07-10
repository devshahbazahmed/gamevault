import { Gamepad2 } from 'lucide-react';
import { footerLinks } from '../constants';
import { Languages } from 'lucide-react';
import { Share2 } from 'lucide-react';

function Footer() {
  return (
    <footer className="mt-20 border-t border-[#1c2b3c]">
      <div className="mx-auto w-full max-w-345 px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="/" className="flex items-center gap-2">
              <img src="./logo.png" alt="gamevault" width={120} height={120} />
            </a>

            <p className="mt-7 max-w-xs text-sm leading-7 text-[#64738b]">
              The ultimate destination for game discovery and library
              management. Built for gamers, by gamers.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#94a0b4]">
                {heading}
              </h3>

              <ul className="mt-7 space-y-5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#64738b] transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-[#1c2b3c] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#64738b]">
            © 2026 GameVault Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-[#64738b]">
            <button
              type="button"
              aria-label="Change language"
              className="transition-colors hover:text-white"
            >
              <Languages className="size-4" />
            </button>

            <button
              type="button"
              aria-label="Share GameVault"
              className="transition-colors hover:text-white"
            >
              <Share2 className="size-4" />
            </button>

            <button
              type="button"
              aria-label="Visit website"
              className="transition-colors hover:text-white"
            >
              <Gamepad2 className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
