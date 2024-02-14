export const dateDisplay = (date: string) => {
  return new Date(date).toLocaleDateString();
};

export const displayContent = (content: string) => {
  const startParagraph = content.indexOf(">");
  const endParagraph = content.indexOf(".</p>");
  return content.slice(startParagraph + 1, endParagraph) + "...";
};
