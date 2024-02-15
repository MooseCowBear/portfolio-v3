type CarouselButtonProps = {
  position: number;
  number: number;
  handler: React.Dispatch<React.SetStateAction<number>>;
};

export function CarouselButton({
  position,
  number,
  handler,
}: CarouselButtonProps) {
  const updatePosition = () => {
    handler(number);
  };
  return (
    <button
      className={position == number ? "active" : ""}
      onClick={updatePosition}
    ></button>
  );
}
