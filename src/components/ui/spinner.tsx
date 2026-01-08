interface SpinnerProps {
  className?: string;
  isLoading?: boolean;
}

export default function Spinner({
  className = "",
  isLoading = true,
}: SpinnerProps) {
  return isLoading ? (
    <div
      className={`animate-spin rounded-full border-2 border-t-transparent ${className}`}
      style={{ borderColor: "currentColor" }}
    />
  ) : null;
}
