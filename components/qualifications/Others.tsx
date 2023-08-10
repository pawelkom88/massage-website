import React, { CSSProperties, ReactNode } from "react";

interface Course {
  title: string;
  id: number;
}

interface OthersProps {
  data: Course[];
  icon?: JSX.Element;
  styles?: CSSProperties;
  title?: string;
  hasHeading?: string;
}

interface CourseItemProps {
  children: ReactNode;
}

const CourseItem = ({ children }: CourseItemProps) => (
  <li className="w-full text-lg font-medium gap-4 list-item">{children}</li>
);

const Others = ({ data, styles, title = "", hasHeading = "" }: OthersProps) => {
  return (
    <div className="w-full mx-auto my-12 px-4">
      {title && <h2 className="text-center text-heading2 mt-4">{title}</h2>}
      {title && <br />}
      {title && <br />}
      <div style={styles} className="lg:w-1/2 -my-3 space-y-3">
        {hasHeading && <h3 className="text-xl text-center">{hasHeading}</h3>}
        <ul style={styles} className="list-disc">
          {data.map(({ id, title }) => (
            <CourseItem key={id}>{title}</CourseItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Others;
