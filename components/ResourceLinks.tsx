// components/ResourceLinks.tsx
import React from "react";

interface Resource {
  label: string;
  href: string;
  icon?: React.ReactNode | null;
}

interface ResourceLinksProps {
  title?: string;
  resources: Resource[];
  className?: string; 
}

const ResourceLinks: React.FC<ResourceLinksProps> = ({
  resources,
  className = "",
}) => {
  if (resources.length === 0) return null;

  return (
    <div className={className}>
      <ul className="space-y-2 text-sm">
        {resources.map(({ label, href, icon }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-500"
            >
              {icon && <span className="w-4 h-4">{icon}</span>}
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceLinks;
