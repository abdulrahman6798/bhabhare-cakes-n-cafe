// A compact restaurant-style menu row — image, name, description, price.
// Used on /cafe-menu so real, priced items don't need a full ProductCard.
export default function MenuItem({ item }) {
  return (
    <div className="flex items-center gap-4 p-4 sm:p-5">
      <img src={item.image} alt={item.name} loading="lazy" className="h-16 w-16 shrink-0 rounded-xl object-cover" />
      <div className="flex-1">
        <p className="font-display text-[15.5px] font-semibold text-ink">{item.name}</p>
        <p className="mt-0.5 text-[13px] leading-relaxed text-ink/55">{item.description}</p>
      </div>
      <span className="shrink-0 font-display text-base font-semibold text-plum-700">₹{item.price}</span>
    </div>
  )
}
