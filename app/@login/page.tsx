import SignBtn from "../components/sign-btn";
import SocialBtn from "../components/social-btn";

export default function Home() {
  return (
    <main className="flex flex-col w-full p-10">
      <span className="text-6xl">𝕏</span>
      <div className="mt-10">
        <p className="text-[43px] font-bold">지금 일어나고 있는 일</p>
        <p className="mt-10 font-bold text-2xl">지금 가입하세요.</p>
        <div className="mt-3 flex flex-col w-80">
          <SocialBtn social="google" />
          <SocialBtn social="github" />
          <div className="relative mt-3 ">
            <div className="absolute w-full border-t border-gray-700" />
            <div className="relative -top-3 text-center">
              <span className="bg-black px-2">또는</span>
            </div>
          </div>
          <SignBtn type="signUp" />
          <span className="mt-16 text-base font-semibold mb-4">
            이미 트위터에 가입하셨나요?
          </span>
          <SignBtn type="signIn" />
        </div>
      </div>
    </main>
  );
}
