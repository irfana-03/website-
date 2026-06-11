"use client";

import AnimatedText from "../AnimatedText";
import RevealOnScroll from "../RevealOnScroll";
import ParallaxImage from "../ParallaxImage";

const DISH1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBiZSSXVBVerI19IcY4s-tnar-k8Zt6U2khK91Kw1uu5QuF0E9WIiVt09vjhayCDx25kPzYatVFivMoc-PzHpHTnuoIyiW7lBlFY7sM_O8U9q4q4TeX33RLSc58jvRgpIR9p4L_Kn_TGbhI0tC5VnD_IVB7He9gRSzo6mD2TqgXzlbmfqDmszwvS-nYNEVAg0ntNUMCIpH7bgQgK1KVWSJ5mOn3Vt6hOmubU17-6hDEoF6fuMXaWTY8ynflVHRAgBxTPiQBdrrJlcs";
const DISH2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXwJxWE9e5A13o3RJKUOkGG5ApA6qHRDfj8F0gK5sxtTyLkgN1zADYl_Jin_7qahO0cMGEzfgzYbgC1Xh_-66LVs-6ZDFJkGGZJt2FE35fYQLAKAh7qFQBj0qYvmATZ9C4wt1iFa6yf3hWvkdTwMkZNeVJHE8j1vgoHskJosvSaoUDLP-UIum-_RsZlf7vXcMsXnX-bdrqVD3jKAtVjG79zfWrgdI1wkQu2KQ0frIuS9ydGPi1Jemgu0qNPegOs16IE_w4XJxcYlE";

const menuItems = [
  {
    category: "Small Plates",
    image: DISH1,
    items: [
      { name: "Truffle Edamame Dumplings", price: "₹650", desc: "Hand-folded crystal dumplings, black truffle oil, garlic soy broth." },
      { name: "Mangalorean Chicken Ghee Roast", price: "₹850", desc: "Slow-roasted in clarified butter with Byadgi chilies." },
    ],
  },
  {
    category: "Signature Mains",
    image: DISH2,
    items: [
      { name: "Pulled Chicken Pizza", price: "₹1100", desc: "Wood-fired crust, smoky chicken, caramelized onions, aged cheeses." },
      { name: "Miso Glazed Black Cod", price: "₹2200", desc: "Wild-caught cod, sweet miso marinade, pickled ginger." },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">CURATED SELECTIONS</p>
            <AnimatedText
              text="Culinary Excellence"
              as="h2"
              className="section-heading"
            />
          </div>
        </div>

        <div className="menu-grid">
          {menuItems.map((col, ci) => (
            <RevealOnScroll key={col.category} delay={ci * 0.15}>
              <div className="menu-column">
                <ParallaxImage
                  src={col.image}
                  alt={col.category}
                  speed={0.15}
                  style={{ height: "220px", borderRadius: "var(--rounded-lg)", marginBottom: "24px" }}
                />
                <h3 className="menu-category">{col.category}</h3>
                <ul className="menu-list">
                  {col.items.map((item) => (
                    <li key={item.name} className="menu-item hover-lift">
                      <div className="menu-item-header">
                        <h4>{item.name}</h4>
                        <span className="menu-price">{item.price}</span>
                      </div>
                      <p>{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.3}>
          <div className="cocktails-block">
            <div className="ambient-glow" />
            <div className="cocktails-grid">
              <div>
                <p className="section-eyebrow">LIQUID CRAFTSMANSHIP</p>
                <h3 className="section-heading" style={{ marginBottom: "24px" }}>Alchemy at Midnight</h3>
                <p className="body-text">
                  Our bar is a stage where mixology meets storytelling. Each signature cocktail is a delicate balance of premium spirits, house-made infusions, and theatrical presentation.
                </p>
                <ul className="cocktail-list">
                  <li>
                    <span className="cocktail-icon">🍷</span>
                    <div>
                      <h4>The Madras Smoked Old Fashioned</h4>
                      <p>Bourbon, spiced jaggery syrup, hickory smoke.</p>
                    </div>
                  </li>
                  <li>
                    <span className="cocktail-icon">🍸</span>
                    <div>
                      <h4>Coromandel Sunset</h4>
                      <p>Gin, fresh hibiscus extract, citrus dust.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cocktail-image-wrap image-tilt">
                <ParallaxImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAex3nhTJbqamTlrgmCrY13bfQqWo-2dSEjUX99n3VfuelO0z6HJo_H-g8rrb_FlYX1Jm5nJaWumehHg5D3rUcev5RChiiz8qboz-WcjOWqhQrPb4BNFmHTfxWhgk6e4kAGXuJf9atb-73bhYVx-m7au8Q3MM2CRTofUOJHVduvZZaPYOf3kgsVmz70vlP_wQuUOoo4_gd_CQRkz2eRmuHVijW8HmDRJbGITzX55Xg8vXclvvajmdIYtMDkNp4Jvhw-RxiXuqDF180"
                  alt="Signature cocktails"
                  speed={0.25}
                  style={{ minHeight: "400px", borderRadius: "16px" }}
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
