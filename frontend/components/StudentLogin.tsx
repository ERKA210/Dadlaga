import Link from "next/link";
import { useState } from "react";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>

      {/* Title */}
      <h2 className="text-center text-lg font-semibold mb-4">Нэвтрэх</h2>

      {/* Tabs */}
      <div className="flex border rounded-full overflow-hidden mb-6 select-none">
        <button
          className={`flex-1 py-2 text-center font-medium ${
            activeTab === "login"
              ? "bg-white border border-black rounded-full"
              : "bg-gray-100 text-gray-400"
          }`}
          onClick={() => setActiveTab("login")}
        >
          Нэвтрэх
        </button>
        <button
          className={`flex-1 py-2 text-center font-medium ${
            activeTab === "register"
              ? "bg-white border border-black rounded-full"
              : "bg-gray-100 text-gray-400"
          }`}
          onClick={() => setActiveTab("register")}
        >
          Бүртгүүлэх
        </button>
      </div>

      {/* Tab content */}
      {activeTab === "login" ? (
        <>
          <p className="text-sm text-gray-400 mb-2">Утасны дугаар, нууц үгээ оруулна уу.</p>

          <label className="block mb-2">
            <span className="text-gray-700 text-sm">Утасны дугаар</span>
            <input
              type="text"
              placeholder="Утасны дугаар"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 text-sm">Нууц үг</span>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <Link href="/" className="w-full bg-blue-700 text-white py-3 rounded font-semibold mb-4 hover:bg-red-800 transition">
            Нэвтрэх
          </Link>
        </>
      ) : (
        <>
          {/* Register tab content */}
          <p className="text-sm text-gray-400 mb-2">Бүртгэл үүсгэхэд шаардлагатай мэдээллүүдээ оруулна уу.</p>

          <label className="block mb-2">
            <span className="text-gray-700 text-sm">Нэр</span>
            <input
              type="text"
              placeholder="Нэр"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700 text-sm">Утасны дугаар</span>
            <input
              type="text"
              placeholder="Утасны дугаар"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 text-sm">Нууц үг</span>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </label>

          <Link href="/" className="w-full bg-blue-700 text-white py-3 rounded font-semibold mb-4 hover:bg-green-700 transition">
            Бүртгүүлэх
          </Link>
        </>
      )}
    </div>
  );
}
