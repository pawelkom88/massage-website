export interface Link {
  id: number;
  name: string;
  href: string;
  hasDropDown: boolean;
}

export interface DropDownProps {
  onShowDropDown: (id: number) => void;
  showDropDown: number;
}

export interface LinksProps extends DropDownProps {
  numberDropDownOfLinks: number;
  links: Link[];
}
