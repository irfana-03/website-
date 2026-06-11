"use client";
import React from 'react';

export default function Gallery() {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCXwJxWE9e5A13o3RJKUOkGG5ApA6qHRDfj8F0gK5sxtTyLkgN1zADYl_Jin_7qahO0cMGEzfgzYbgC1Xh_-66LVs-6ZDFJkGGZJt2FE35fYQLAKAh7qFQBj0qYvmATZ9C4wt1iFa6yf3hWvkdTwMkZNeVJHE8j1vgoHskJosvSaoUDLP-UIum-_RsZlf7vXcMsXnX-bdrqVD3jKAtVjG79zfWrgdI1wkQu2KQ0frIuS9ydGPi1Jemgu0qNPegOs16IE_w4XJxcYlE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBiZSSXVBVerI19IcY4s-tnar-k8Zt6U2khK91Kw1uu5QuF0E9WIiVt09vjhayCDx25kPzYatVFivMoc-PzHpHTnuoIyiW7lBlFY7sM_O8U9q4q4TeX33RLSc58jvRgpIR9p4L_Kn_TGbhI0tC5VnD_IVB7He9gRSzo6mD2TqgXzlbmfqDmszwvS-nYNEVAg0ntNUMCIpH7bgQgK1KVWSJ5mOn3Vt6hOmubU17-6hDEoF6fuMXaWTY8ynflVHRAgBxTPiQBdrrJlcs",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAex3nhTJbqamTlrgmCrY13bfQqWo-2dSEjUX99n3VfuelO0z6HJo_H-g8rrb_FlYX1Jm5nJaWumehHg5D3rUcev5RChiiz8qboz-WcjOWqhQrPb4BNFmHTfxWhgk6e4kAGXuJf9atb-73bhYVx-m7au8Q3MM2CRTofUOJHVduvZZaPYOf3kgsVmz70vlP_wQuUOoo4_gd_CQRkz2eRmuHVijW8HmDRJbGITzX55Xg8vXclvvajmdIYtMDkNp4Jvhw-RxiXuqDF180"
  ];

  return (
    <div className="container section" style={{ minHeight: "100vh", paddingTop: "120px" }}>
      <h1 className="animate-pulse-glow" style={{ fontFamily: "var(--font-playfair), serif", fontSize: "56px", color: "var(--primary)", textAlign: "center", marginBottom: "64px" }}>A Glimpse of SUNDAYS</h1>
      
      <div className="animate-fade-in-up stagger-1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        {images.map((src, i) => (
          <div key={i} style={{ position: "relative", borderRadius: "var(--rounded-xl)", overflow: "hidden", minHeight: "400px", filter: "grayscale(30%)", transition: "all 0.5s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(30%)")}
          >
            <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
