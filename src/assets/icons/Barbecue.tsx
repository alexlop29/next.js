export function Barbecue({
  fill = false,
  size = 20,
  className = "",
}: {
  fill?: boolean;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      width={size}
      height={size}
      className={className}
      fill={fill ? "currentColor" : "none"}
      stroke={fill ? "none" : "#222a33"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeMiterlimit="2"
    >
      <g data-name="Barbecue">
        {/* Barbecue grill */}
        <circle cx="32" cy="20" r="15" fill={fill ? "currentColor" : "none"} />
        <path
          d="M17 20h30M20 25h24M20 15h24"
          fill="none"
          stroke={fill ? "none" : "#222a33"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Grill legs */}
        <path
          d="M22 35v10M42 35v10"
          fill="none"
          stroke={fill ? "none" : "#222a33"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Grill base */}
        <path
          d="M25 45l-3 10M39 45l3 10"
          fill="none"
          stroke={fill ? "none" : "#222a33"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Flames on the barbecue */}
        <path
          d="M28 22c0-4 3-7 3-7s3 3 3 7c0 2-1 3-1 3s-2 1-2-1c0 0-2 2-2 1 0 0-1-1-1-3z"
          fill={fill ? "currentColor" : "none"}
          stroke={fill ? "none" : "#222a33"}
        />
        <path
          d="M35 22c0-4 2-6 2-6s2 2 2 6c0 2-1 2-1 2s-2 1-2-1c0 0-1 1-1 1z"
          fill={fill ? "currentColor" : "none"}
          stroke={fill ? "none" : "#222a33"}
        />
      </g>
    </svg>
  );
}
