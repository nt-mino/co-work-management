import Image from "next/image";
import WelcomeImage from "/public/assets/welcome.svg";

export default function WelcomeCard() {
  return (
    <div className="w-full h-[300px] bg-purple-50 rounded-md py-6 px-12">
      <div className="flex flex-row justify-center items-center gap-12">
        <div className="">
          <h2 className="text-[32px] font-bold">Next Innovationへようこそ</h2>
          <p className="">
            革新的なアイデアを形にする場所です。共に未来を創造しましょう。
            <br />
            最新ツールで、ビジョンを形に。
          </p>
        </div>
        <div className="">
          <Image
            className="pt-2"
            src={WelcomeImage}
            alt={"Welcome image of dashboard"}
            width={450}
            height={450}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
