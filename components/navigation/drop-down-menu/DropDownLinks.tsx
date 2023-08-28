import Link from "next/link";
import { SubLink, generateLinkFromName, linkNames } from "./data";

// Use the names to create subLinks1
export const subLinks1 = linkNames.map((name, index) => ({
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
    name: "During the treatment",
    href: `/${generateLinkFromName("During the treatment")}`,
  },
];

export default function DropDownLinks({
  itemProps,
  id,
  onShowDropDown,
}: {
  itemProps: any;
  id: number;
  onShowDropDown: (val: boolean) => void;
}) {
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
      className={`absolute w-[20rem] z-20 top-12 ${
        id === 1 ? "left-[-7rem]" : "right-[-7rem]"
      } mt-2 text-center shadow-lg`}
      role="menu">
      <div
        role="menuitem"
        className="flex text-left gap-4 text-md flex-col rounded-lg border-4 border-primary-clr p-4 pl-8 bg-white">
        {subLinks.map(({ id, href, name }, index) => {
          return (
            <Link
              onClick={() => onShowDropDown(false)}
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
