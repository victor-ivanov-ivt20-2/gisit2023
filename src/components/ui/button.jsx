export const SecondaryButton = ({
  children,
  onClick,
  height = "73px",
  width = "165px",
}) => {
  return (
    <button
      className="rounded-full text-[#3B82F6] text-lg leading-[25px] font-medium"
      style={{
        height: height,
        width: width,
        background: "rgba(59, 130, 246, 0.24)",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
