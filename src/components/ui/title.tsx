interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <h3 className="text-white font-poppins font-bold text-xl hover:text-brand transition-colors duration-300">
      {children}
    </h3>
  );
}
