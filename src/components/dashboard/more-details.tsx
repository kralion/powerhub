import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type IOption = {
  label: string;
  value: string;
  href: string;
};

type MoreDetailsProps = {
  menuTrigger: React.ReactNode;
  options: IOption[];
  titleOption?: string;
};

type Checked = boolean;

export function MoreDetails({
  menuTrigger,
  options,
  titleOption,
}: MoreDetailsProps) {
  const [checkedOptions, setCheckedOptions] = useState<Record<string, Checked>>(
    {},
  );

  const handleCheckedChange = (optionValue: string) => {
    setCheckedOptions({ [optionValue]: true });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{menuTrigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {titleOption && (
          <>
            <DropdownMenuLabel>{titleOption}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.value}
            checked={checkedOptions[option.value]}
            onClick={() =>
              alert("We are working on this feature. Please check back later.")
            }
            onCheckedChange={() => handleCheckedChange(option.value)}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
