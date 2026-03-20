"use client";
export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-teal-700 rounded-full animate-spin mb-4"></div>
      {text && <p className="text-gray-500 text-sm">{text}</p>}
    </div>
  );
}










