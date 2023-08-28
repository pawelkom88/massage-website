import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

function paragraphClass(node: string) {
  const className = "max-w-readable mx-auto my-4 indent-1.5 text-justify text-lg";
  return className;
}

function headingClass(node: string) {
  const className = "text-2xl my-4 font-bold text-center";
  return className;
}
function heading3Class(node: string) {
  const className = "text-xl my-8 font-bold text-center";
  return className;
}

function ulClass(node: string) {
  const className = "max-w-readable mx-auto text-lg";
  return className;
}

export const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className={headingClass(node)}>{children}</h2>
    ),

    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className={heading3Class(node)}>{children}</h3>
    ),

    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
      return <p className={paragraphClass(node)}>{children}</p>;
    },

    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => {
      return <ul className={ulClass(node)}>{children}</ul>;
    },

    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a className="text-secondary-clr underline" href={node.data.uri}>
        {children}
      </a>
    ),

    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => {
      const UnTaggedChildren = documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      });

      return <li className="list-disc">{UnTaggedChildren}</li>;
    },
  },
};
