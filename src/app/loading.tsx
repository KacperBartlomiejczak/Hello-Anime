export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white font-poppins animate-pulse">
          Loading your website
        </p>
      </div>
    </div>
  );
}
