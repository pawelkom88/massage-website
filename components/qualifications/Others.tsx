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
}

const CourseItem = ({ children, icon }: { children: ReactNode; icon?: JSX.Element }) => (
  <dt className="w-full text-lg font-medium flex items-center gap-2">
    {icon}
    {children}
  </dt>
);

const Others = ({ data, icon, styles, title = "Other" }: OthersProps) => {
  return (
    <div className="max-w-7xl mx-auto my-12">
      <h2 className="text-center text-heading2 mt-4">{title}</h2>
      <br />
      <br />
      <dl style={styles} className="lg:w-1/2 -my-3 space-y-3">
        {data.map(({ id, title }) => (
          <CourseItem icon={icon} key={id}>
            {title}
          </CourseItem>
        ))}
      </dl>
    </div>
  );
};

export default Others;
