interface ISignBtn {
  type: "signUp" | "signIn";
}
export default function SignBtn({ type }: ISignBtn) {
  return type === "signUp" ? (
    <span
      className={`bg-[#0F2562] text-white font-bold  rounded-full px-5 py-2.5 w-full flex justify-center cursor-pointer `}
    >
      {`계정 만들기`}
    </span>
  ) : (
    <span
      className={`text-[#0F2562] font-bold rounded-full px-5 py-2  w-full flex justify-center cursor-pointer text-base border border-gray-700`}
    >
      {`로그인`}
    </span>
  );
}
