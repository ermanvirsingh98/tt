import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export default function RichText({ content }: any) {
  const renderComponents = (entry: any) => {
    if (!entry) {
      return null;
    }

    switch (entry.sys.contentType.sys.id) {
      case "multiImageBlock":
        return (
          <div className="embedded-entry-multi-image-block">
            {entry.fields.cloudinaryImages.map((image: any) => (
              <img width="100%" height="100%" src={image.url} alt="" />
            ))}
            {/* <pre>
              {JSON.stringify(entry.fields.cloudinaryImages[0], null, 2)}
            </pre> */}
          </div>
        );
      case "gallery":
        return (
          <div className="embedded-entry-gallery">
            {entry.fields.images.map((image: any) => (
              <img width={"100%"} height={"100%"} src={image.url} alt="" />
            ))}
          </div>
        );
      // case "blockquote":
      //   return <div>{JSON.stringify(entry, null, 2)}</div>;
    }

    return null;
  };
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        const entry = node.data.target;

        // adjust depending on your Contentful model
        return renderComponents(entry);
      },

      [BLOCKS.QUOTE]: (node: any, children: any) => {
        const entry = node.data.target;

        return <blockquote className="article-quote">{children}</blockquote>;
      },
    },

    renderText: (text: string) =>
      text
        .split("\n")
        .reduce((children: any, textSegment: string, index: number) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []),
  };

  if (!content) return null;

  return <>{documentToReactComponents(content, options)}</>;
}
