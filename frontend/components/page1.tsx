import Image from "next/image";

export default function Page1() {
    return (
        <main>
          <div className="main">
            <div className="main-text ml-5">
              <h1 className="text-5xl font-bold text-blue-900">Дадлагаа хийх газраа сонгоорой</h1>
              <p className="text-blue-800">
                Компануудын дадлага заруудыг хайх өөрт тохирсон газартаа
                хүсэлт илгээх боломжтой
              </p>
            </div>
            <Image
              className="home-image"
              src="/back-home.svg"
              alt="main image"
              width={1000}
              height={500}
            />
          </div>
        </main>
    )
}