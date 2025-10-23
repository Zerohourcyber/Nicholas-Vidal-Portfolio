interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-steel-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-steel-600 max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`accent-bar mt-6 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

