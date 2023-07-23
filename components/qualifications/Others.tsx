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
  icon: JSX.Element;
}

const CourseItem = ({ children, icon }: CourseItemProps) => (
  <>
    <dt className="w-full text-lg font-medium flex items-center gap-4">
      {icon}
      <span>{children}</span>
    </dt>
  </>
);

const Others = ({ data, icon, styles, title = "", hasHeading = "" }: OthersProps) => {
  return (
    <div className="w-full mx-auto my-12">
      <h2 className="text-center text-heading2 mt-4">{title}</h2>
      <br />
      <br />
      <dl style={styles} className="lg:w-1/2 -my-3 space-y-3">
        <h3 className="text-xl text-center">{hasHeading}</h3>
        {data.map(({ id, title }) => (
          <CourseItem icon={icon || <div />} key={id}>
            {title}
          </CourseItem>
        ))}
      </dl>
    </div>
  );
};

export default Others;
