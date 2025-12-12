interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <h3 className="text-white hover:text-brand transition-colors duration-300">
      {title}
    </h3>
  );
}
