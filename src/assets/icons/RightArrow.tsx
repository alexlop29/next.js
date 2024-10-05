import React from "react";
function Icon({ fill = false, size = 20 }: { fill?: boolean; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      style={{
        transform: "rotate(270deg)",
      }}
    >
      {!fill ? (
        <>
          <path
            fill="currentColor"
            d="M12 20.27a.75.75 0 01-.53-.22l-7-7A.753.753 0 015.55 12L12 18.45 18.45 12a.75.75 0 111.06 1.06l-7 7a.75.75 0 01-.51.21z"
          ></path>
          <path
            fill="currentColor"
            d="M12 20.26a.76.76 0 01-.75-.75v-15a.75.75 0 111.5 0v15a.76.76 0 01-.75.75z"
          ></path>
          <path
            fill="currentColor"
            d="M12 20.27a.75.75 0 01-.53-.22l-7-7A.753.753 0 015.55 12L12 18.45 18.45 12a.75.75 0 111.06 1.06l-7 7a.75.75 0 01-.51.21z"
          ></path>
          <path
            fill="currentColor"
            d="M12 20.26a.76.76 0 01-.75-.75v-15a.75.75 0 111.5 0v15a.76.76 0 01-.75.75z"
          ></path>
        </>
      ) : (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 2C4.68629 2 2 4.68629 2 8V16.12C2 19.4337 4.68629 22.12 8 22.12H16.12C19.4337 22.12 22.12 19.4337 22.12 16.12V8C22.12 4.68629 19.4337 2 16.12 2H8ZM6.24077 12.9965L11.5023 18.2581L11.4812 18.2686C11.7894 18.5763 12.2885 18.5763 12.5967 18.2686L17.8582 13.0071C18.0025 12.8568 18.0852 12.6577 18.0897 12.4494C18.0879 12.2383 18.0006 12.0371 17.8477 11.8916C17.5395 11.5839 17.0403 11.5839 16.7322 11.8916L12.8387 15.7957V6.40914C12.8387 5.97326 12.4854 5.61992 12.0495 5.61992C11.6136 5.61992 11.2603 5.97326 11.2603 6.40914V15.7851L7.36674 11.8811C7.16748 11.68 6.87606 11.6004 6.60225 11.6724C6.32843 11.7444 6.11382 11.957 6.03927 12.2301C5.96471 12.5033 6.04152 12.7954 6.24077 12.9965Z"
            fill="currentColor"
          />
        </>
      )}
    </svg>
  );
}
export default Icon;
