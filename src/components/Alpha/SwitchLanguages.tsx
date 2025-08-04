import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "en", label: "English", flag: "/en.png" },
  { code: "kh", label: "Khmer", flag: "/kh.svg" },
  // Add more languages here
];

function SwitchLanguages({ onChange }: { onChange?: (lang: string) => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState("en");

  // Set currentLang from URL on mount or when pathname changes
  useEffect(() => {
    const pathLang = pathname.split("/")[1];
    if (languages.some((l) => l.code === pathLang)) {
      setCurrentLang(pathLang);
    }
  }, [pathname]);

  const handleSwitch = () => {
    const currentIndex = languages.findIndex((l) => l.code === currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLang = languages[nextIndex].code;
    if (onChange) onChange(nextLang);

    let pathParts = pathname.split("/");
    // Replace or insert the language code as the first segment after "/"
    if (languages.some((l) => l.code === pathParts[1])) {
      pathParts[1] = nextLang;
    } else {
      pathParts.splice(1, 0, nextLang);
    }
    // Remove everything after "?" (ignore query)
    const newPath = pathParts.join("/") || "/";
    router.push(newPath);
  };

  const current = languages.find((l) => l.code === currentLang);

  return (
    <div>
      <button onClick={handleSwitch} title={`Switch to next language`}>
        <img
          className="object-contain mt-1.5 lg:mt-2 w-14 h-8 lg:w-16 lg:h-10 rounded-md p-1 hover:scale-110 transition-all duration-300 ease-in-out hover:bg-gray-200"
          src={current?.flag}
          alt={current?.label}
        />
      </button>
    </div>
  );
}

export default SwitchLanguages;
