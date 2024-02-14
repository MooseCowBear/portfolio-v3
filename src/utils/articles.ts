export const dateDisplay = (date: string) => {
  return new Date(date).toLocaleDateString();
};

export const displayContent = (content: string) => {
  const endParagraph = content.indexOf("</p>");
  return content.slice(4, endParagraph) + "...";
};
