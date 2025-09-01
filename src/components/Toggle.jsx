import React from "react";

export default function Toggle({ toggleTheme, checked }) {
  return (
    <div className="group relative inline-flex h-5 w-10 shrink-0 items-center justify-center rounded-full outline-offset-2 outline-indigo-600 has-focus-visible:outline-2">
      <span className="absolute mx-auto h-4 w-9 rounded-full bg-neutral-950 inset-ring inset-ring-gray-900/5 transition-colors duration-200 ease-in-out group-has-checked:bg-gray-200" />
      <span
        className={`absolute left-0 size-5 rounded-full border border-gray-300 bg-white shadow-xs transition-transform duration-200 ease-in-out ${
          checked ? "translate-x-5" : ""
        }`}
      />
      <input
        onChange={toggleTheme}
        checked={checked}
        name="setting"
        type="checkbox"
        aria-label="Use setting"
        className="absolute inset-0 cursor-pointer appearance-none focus:outline-hidden"
      />
    </div>
  );
}
