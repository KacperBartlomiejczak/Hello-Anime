import LoginButtonsGroup from "./loginButtonsGroup";

export default function LoginBox() {
  return (
    <div className="w-full h-full flex justify-center items-center fixed z-20">
      <div className="bg-secondary-background p-8 rounded-xl text-center w-[90%] md:w-auto lg:p-10">
        <h2 className="font-bold text-xl mb-2">
          Welcome to{" "}
          <span className="text-brand">
            <br></br>Hello
          </span>{" "}
          Anime!
        </h2>

        <p>Create account by login with this options</p>
        <div className="flex flex-col items-center justify-center mt-6 gap-2">
          <LoginButtonsGroup />
        </div>
      </div>
    </div>
  );
}
