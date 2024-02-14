// function to get first paragraph from article object (without the <p> tags)

// function to make the date readable

export const dateDisplay = (date: string) => {
  return new Date(date).toLocaleDateString();
};
