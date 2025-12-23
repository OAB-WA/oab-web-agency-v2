import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-dark";
  
  return (
    <Link href="/" className={`logo-premium ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 20L26 25L16 30L6 25L16 20Z"
          fill="url(#stack_gradient)"
          fillOpacity="0.4"
        />
        <path
          d="M16 12L26 17L16 22L6 17L16 12Z"
          fill="url(#stack_gradient)"
          fillOpacity="0.7"
        />
        <path d="M16 4L26 9L16 14L6 9L16 4Z" fill="url(#stack_gradient)" />
        <defs>
          <linearGradient
            id="stack_gradient"
            x1="6"
            y1="2"
            x2="26"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FF6B00" />
            <stop offset="1" stopColor="#FF9E40" />
          </linearGradient>
        </defs>
      </svg>
      <span className={`brand-name ${textColor} font-bold`}>
        Anu<span className="brand-highlight" style={{ color: "#FF6B00" }}>
          Tech
        </span>
      </span>
    </Link>
  );
}


