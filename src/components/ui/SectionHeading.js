export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "left" ? "text-center md:text-left" : "text-center";
  const barAlignment = align === "left" ? "mx-auto md:mx-0" : "mx-auto";

  return (
    <div className={`${alignment} mb-16 ${className}`}>
      <p className="text-xs font-mono tracking-widest text-[#adc6ff] uppercase mb-2">
        {eyebrow}
      </p>
      <h2 className="font-hanken font-bold text-3xl sm:text-4xl tracking-tight text-white">
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-24 bg-gradient-to-r from-[#adc6ff] to-[#14d1ff] rounded-full ${barAlignment}`}
      />
    </div>
  );
}
