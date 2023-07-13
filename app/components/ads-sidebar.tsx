import { useEffect, useRef } from "react";

export function AdsSideBar(props: { className?: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.setAttribute("data-ad-client", "ca-pub-2165739551283251");

    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: 260, height: 300 }}>
      {window.innerWidth < 640 ? null : (
        <ins
          className="adsbygoogle"
          style={{ width: 260, height: 300 }}
          data-ad-client="ca-pub-2165739551283251"
          data-ad-slot="7007478358"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
    </div>
  );
}
