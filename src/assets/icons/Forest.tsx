export function Forest({
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
        stroke={fill ? "none" : "#ffffff"}  // White stroke for the paths
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeMiterlimit="2"
      >
        {/* Circular background */}
        <circle cx="32" cy="32" r="32" fill="#333c80" /> {/* Circular background */}
  
        {/* Trees and paths */}
        <path
          d="m29.296 41 2.399 4.155a2.14 2.14 0 0 1-1.852 3.209H10.121a2.141 2.141 0 0 1-1.853-3.209l4.824-8.355a1.892 1.892 0 0 0-1.638-2.838h-.011a1.89 1.89 0 0 1-1.638-2.838l8.324-14.418a2.14 2.14 0 0 1 3.705 0l8.322 14.414a1.893 1.893 0 0 1-1.641 2.842 1.894 1.894 0 0 0-1.641 2.843"
          fill="none"
        />
        <path
          d="M28.367 28.021a2.34 2.34 0 0 1 .299-.919L38.933 9.319a2.64 2.64 0 0 1 4.57 0l10.264 17.777a2.34 2.34 0 0 1-2.024 3.506 2.336 2.336 0 0 0-2.024 3.506l5.946 10.298a2.64 2.64 0 0 1-2.285 3.958H35.8"
          fill="none"
        />
        <path
          d="M16.964 48.364v6.161c0 .815.66 1.475 1.474 1.475h3.087A1.474 1.474 0 0 0 23 54.525v-1.798"
          fill="none"
        />
        <path
          d="M37 48.364v6.161A1.474 1.474 0 0 0 38.475 56h3.05A1.474 1.474 0 0 0 43 54.525v-1.798"
          fill="none"
        />
        <path
          d="M30.5 31.5l5.5-10M30 48l-4.5-7M23.25 37.5l-.964-1.5"
          fill="none"
        />
      </svg>
    );
  }
  