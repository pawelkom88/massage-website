import Link from "next/link";
import { SubLink, generateLinkFromName, names } from "./data";

// Use the names to create subLinks1
export const subLinks1 = names.map((name, index) => ({
  id: index + 1,
  name,
  href: `/treatments/${generateLinkFromName(name)}`,
}));

export const subLinks2: SubLink[] = [
  {
    id: 1,
    name: "Aftercare advice",
    href: `/${generateLinkFromName("Aftercare advice")}`,
  },
  {
    id: 2,
    name: "Before and during treatment",
    href: `/${generateLinkFromName("Before and during treatment")}`,
  },
];

export default function DropDownLinks({ itemProps, id }: { itemProps: any; id: number }) {
  let subLinks: SubLink[] = [];

  switch (id) {
    case 1:
      // treatments
      subLinks = subLinks1;
      break;
    case 8:
      // what to expect
      subLinks = subLinks2;
  }

  return (
    <div
      className={`absolute ${id === 1 ? "w-[20rem]" : "w-[14rem]"} z-20 top-12 ${
        id === 1 ? "left-[-7rem]" : "right-[-3rem]"
      } mt-2 text-center shadow-lg`}
      role="menu">
      <div
        role="menuitem"
        className="flex text-left gap-4 text-md flex-col rounded-lg border-4 border-primary-clr p-4 pl-8 bg-white">
        {subLinks.map(({ id, href, name }, index) => {
          return (
            <Link
              className="text-secondary-clr hover:text-primary-clr hover:underline"
              key={id}
              {...itemProps[index]}
              href={href}>
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
