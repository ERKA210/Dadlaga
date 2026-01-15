import Link from "next/link";

export default function AddPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Чиглэл (жишээ нь: IT, Маркетинг)"
        className="w-full mb-4 p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Хаяг"
        className="w-full mb-4 p-2 border rounded"
      />

      <input
        type="tel"
        placeholder="Утасны дугаар"
        className="w-full mb-4 p-2 border rounded"
      />

      <textarea
        placeholder="Тавигдах шаардлага"
        className="w-full mb-4 p-2 border rounded"
      ></textarea>

      <Link
        href="/"
        className="block text-center w-full bg-blue-800 text-white py-2 px-2 rounded"
      >
        Зар оруулах
      </Link>
    </div>
  );
}
