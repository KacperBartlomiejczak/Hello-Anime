import FooterList from "./footerList";
import FooterHeading from "./footerHeading";
export default function Footer() {
  return (
    <footer className="relative w-screen bg-background">
      <div className="w-full flex">
        <div className="relative left-0 h-[20dvh] w-1/2 bg-secondary-background [clip-path:polygon(0_0,0%_100%,100%_100%)]"></div>
        <div className="relative right-0 h-[20dvh] w-1/2 bg-secondary-background [clip-path:polygon(100%_0,0%_100%,100%_100%)]"></div>
      </div>
      <div className="bg-secondary-background">
        <div className="container w-full h-full mx-auto p-4 flex flex-col-reverse items-center justify-center md:flex-row">
          <FooterHeading />
          <FooterList />
        </div>
      </div>
    </footer>
  );
}
