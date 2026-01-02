import LoginBackground from "@/components/login/loginBackground";
import LoginBox from "@/components/login/loginBox";

export default function Page() {
  return (
    <section className="relative w-full h-full z-20">
      <LoginBox />
      <LoginBackground />
    </section>
  );
}
