import React from 'react';

export default function Menu() {
  return (
    <div className="container section" style={{ minHeight: "100vh", paddingTop: "120px" }}>
      <h1 className="animate-pulse-glow" style={{ fontFamily: "var(--font-playfair), serif", fontSize: "56px", color: "var(--primary)", textAlign: "center", marginBottom: "64px" }}>The Menu</h1>
      <p className="animate-fade-in-up stagger-1" style={{ textAlign: "center", color: "var(--on-surface-variant)", maxWidth: "600px", margin: "0 auto 64px" }}>
        A curation of Mangalorean heritage, global culinary techniques, and liquid craftsmanship.
      </p>
      
      <div className="animate-fade-in-up stagger-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px" }}>
        <div>
          <div style={{ width: "100%", height: "200px", backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiZSSXVBVerI19IcY4s-tnar-k8Zt6U2khK91Kw1uu5QuF0E9WIiVt09vjhayCDx25kPzYatVFivMoc-PzHpHTnuoIyiW7lBlFY7sM_O8U9q4q4TeX33RLSc58jvRgpIR9p4L_Kn_TGbhI0tC5VnD_IVB7He9gRSzo6mD2TqgXzlbmfqDmszwvS-nYNEVAg0ntNUMCIpH7bgQgK1KVWSJ5mOn3Vt6hOmubU17-6hDEoF6fuMXaWTY8ynflVHRAgBxTPiQBdrrJlcs')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "var(--rounded-lg)", marginBottom: "24px" }}></div>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "32px", color: "var(--on-surface)", marginBottom: "24px", borderBottom: "1px solid var(--outline-variant)", paddingBottom: "16px" }}>Small Plates</h2>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "24px" }}>
            <li>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--on-surface)", fontWeight: 600 }}>Truffle Edamame Dumplings</h3>
                <span style={{ color: "var(--primary)" }}>₹650</span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--on-surface-variant)" }}>Hand-folded crystal dumplings, black truffle oil, garlic soy broth.</p>
            </li>
            <li>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--on-surface)", fontWeight: 600 }}>Mangalorean Chicken Ghee Roast</h3>
                <span style={{ color: "var(--primary)" }}>₹850</span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--on-surface-variant)" }}>Slow-roasted in clarified butter with Byadgi chilies.</p>
            </li>
          </ul>
        </div>
        
        <div>
          <div style={{ width: "100%", height: "200px", backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXwJxWE9e5A13o3RJKUOkGG5ApA6qHRDfj8F0gK5sxtTyLkgN1zADYl_Jin_7qahO0cMGEzfgzYbgC1Xh_-66LVs-6ZDFJkGGZJt2FE35fYQLAKAh7qFQBj0qYvmATZ9C4wt1iFa6yf3hWvkdTwMkZNeVJHE8j1vgoHskJosvSaoUDLP-UIum-_RsZlf7vXcMsXnX-bdrqVD3jKAtVjG79zfWrgdI1wkQu2KQ0frIuS9ydGPi1Jemgu0qNPegOs16IE_w4XJxcYlE')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "var(--rounded-lg)", marginBottom: "24px" }}></div>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "32px", color: "var(--on-surface)", marginBottom: "24px", borderBottom: "1px solid var(--outline-variant)", paddingBottom: "16px" }}>Signature Mains</h2>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "24px" }}>
            <li>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--on-surface)", fontWeight: 600 }}>Pulled Chicken Pizza</h3>
                <span style={{ color: "var(--primary)" }}>₹1100</span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--on-surface-variant)" }}>Wood-fired crust, smoky chicken, caramelized onions, aged cheeses.</p>
            </li>
            <li>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--on-surface)", fontWeight: 600 }}>Miso Glazed Black Cod</h3>
                <span style={{ color: "var(--primary)" }}>₹2200</span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--on-surface-variant)" }}>Wild-caught cod, sweet miso marinade, pickled ginger.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
