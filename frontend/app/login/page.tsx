"use client";

import React, { useState } from "react";
import StudentLogin from "@/components/StudentLogin";
import CompanyLogin from "@/components/CompanyLogin";

export default function Login() {
  const [view, setView] = useState<"select" | "student" | "company">("select");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* CARD-ууд */}
      {view === "select" && (
        <div className="flex gap-8">
          <div onClick={() => setView("student")} className="animate-float cursor-pointer">
            <Card
              title="Оюутан"
              desc="Дадлага хайж байна"
              emoji="🎓"
            />
          </div>

          <div onClick={() => setView("company")} className="animate-floatSlow cursor-pointer">
            <Card
              title="Дадлагын газар"
              desc="Зар оруулах"
              emoji="🏢"
            />
          </div>
        </div>
      )}

      {/* ОЮУТНЫ LOGIN */}
      {view === "student" && (
        <StudentLogin onClose={() => setView("select")} />
      )}

      {/* БАЙГУУЛЛАГЫН LOGIN */}
      {view === "company" && (
        <CompanyLogin onBack={() => setView("select")} />
      )}
    </div>
  );
}

function Card({
  title,
  desc,
  emoji,
}: {
  title: string;
  desc: string;
  emoji: string;
}) {
  return (
    <div className="w-48 rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  );
}
