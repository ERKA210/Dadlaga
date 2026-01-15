import {useState} from 'react';

export default async function CompanyLogin({ onBack }: { onBack: () => void }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [companyName, setCompanyName] = useState("");
  
  const handleSubmit = async () => {
    if (!companyName) return alert("Байгууллагын нэр оруулна уу?");
  }
  const res = await fetch("http://localhost:3001/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: companyName }),
      });
      if (res.ok) {
        alert("Байгууллага амжилттай бүртгэгдлээ!");
        setCompanyName("");
      } else {
        alert("Алдаа гарлаа. Дахин оролдоно уу.");
      }
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
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Бүртгүүлэх</button>
    </div>
  );
}
