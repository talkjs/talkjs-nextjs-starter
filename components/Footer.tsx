import React from "react";

interface Resource {
  label: string;
  href: string;
  icon?: React.ReactNode | null;
}

interface FooterProps {
  resources: Resource[];
}

const Footer: React.FC<FooterProps> = ({ resources }) => {
  return (
    <footer className="flex justify-center mt-8 border-t border-neutral-200 pt-6 pb-4 px-4 text-sm text-gray-500">

      <ul className="flex gap-6 flex-wrap">
        {resources.map(({ label, href, icon }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-800 hover:text-blue-500"
            >
              {icon && <span className="w-4 h-4">{icon}</span>}
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
