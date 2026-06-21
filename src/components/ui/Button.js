export default function Button({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  iconPosition = "right",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all";

  const variants = {
    primary:
      "rounded-full bg-gradient-to-r from-[#adc6ff] to-[#14d1ff] text-[#002e6a] font-bold hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]",
    outline:
      "rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors",
    ghost:
      "rounded-full bg-white/5 hover:bg-white/10 text-white text-sm border border-white/10 active:scale-95",
    cta: "rounded-xl bg-gradient-to-r from-[#adc6ff] to-[#14d1ff] hover:from-blue-400 hover:to-cyan-400 text-[#002e6a] font-bold tracking-wide shadow-md duration-300",
    link: "text-xs font-mono font-bold text-[#adc6ff] hover:text-white transition-colors group",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" ? (
        <Icon className="w-4 h-4" aria-hidden="true" />
      ) : null}
      {children}
      {Icon && iconPosition === "right" ? (
        <Icon className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
      ) : null}
    </button>
  );
}
