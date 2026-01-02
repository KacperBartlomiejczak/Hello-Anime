export default function LoginBackground() {
  return (
    <>
      <div className="absolute inste-0 w-screen h-screen bg-background/95 z-10" />
      <div
        className="absolute inset-0 h-screen w-screen z-0 object-center object-cover"
        style={{ backgroundImage: 'url("/bg.jpg")' }}
      ></div>
    </>
  );
}
