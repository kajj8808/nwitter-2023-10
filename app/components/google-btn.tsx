import Image from "next/image";

export default function GoogleBtn() {
  return (
    <span
      className={`bg-white text-black font-medium rounded-full px-5 py-2.5 w-full flex justify-center cursor-pointer text-sm my-2`}
    >
      <div className="w-5 h-5 mr-2">
        <Image
          src={"/github-logo.svg"}
          width={20}
          height={20}
          alt="social btn"
        />
      </div>
      {` 계정으로 가입하기`}
    </span>
  );
}
