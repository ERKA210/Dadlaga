import Link from "next/link";
export default function CompanyLogin({ onBack }: { onBack: () => void }) {
  return (
    <div className="w-96 bg-white p-8 rounded-xl shadow-lg">
      <button onClick={onBack} className="text-sm text-blue-500 mb-4">
        ← Буцах
      </button>

      <h2 className="text-xl font-semibold mb-4">Дадлагын газар</h2>

      <input
        type="Нэр"
        placeholder="Байгууллагын нэр"
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="Чиглэл"
        placeholder="Чиглэл (жишээ нь: IT, Маркетинг)"
        className="w-full mb-4 p-2 border rounded"
      />
      <input type="text" placeholder="Хаяг" className="w-full mb-4 p-2 border rounded" />
      <input type="number" placeholder="Утасны дугаар" className="w-full mb-4 p-2 border rounded" />
      <textarea 
      placeholder="Тавигдах шаардлага"
      className="w-full mb-4 p-2 border rounded"/>
      
      <Link href="/" className="w-full bg-blue-800 text-white py-2 px-2 rounded">
        Зар оруулах
      </Link>
    </div>
  );
}
