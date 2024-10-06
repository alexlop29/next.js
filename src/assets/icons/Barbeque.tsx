import React from "react";

interface CampFireProps {
  fill?: boolean;
  size?: number;
}

export const Barbeque: React.FC<CampFireProps> = ({ fill = false, size = 20 }) => {
  const fillColor = fill ? "#FF4500" : "none"; // Example color when fill is true

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill={fillColor}
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M109.77 35.04h-3.87V32.5a5 5 0 0 0-5-5h-2.16a5.547 5.547 0 0 0 .19-1.43 5.441 5.441 0 0 0-5.43-5.43H71.32a5.441 5.441 0 0 0-5.43 5.43 5.547 5.547 0 0 0 .19 1.43h-4.16a5.547 5.547 0 0 0 .19-1.43 5.441 5.441 0 0 0-5.43-5.43H34.5a5.441 5.441 0 0 0-5.43 5.43 5.547 5.547 0 0 0 .19 1.43H27.1a5 5 0 0 0-5 5v2.54h-3.87a5 5 0 0 0-5 5v6.46a5.008 5.008 0 0 0 5 5h4.36a43.112 43.112 0 0 0 21.42 25.88h.01l12.13 21.08-9.84 17.04c-1.88 3.26-.879 7.663 2.5 9.32 4.663 2.287 8.05-.31 9.31-2.5l5.9-10.18 5.86 10.18c1.26 2.19 4.566 4.707 9.31 2.5 3.412-1.587 4.38-6.06 2.5-9.32L71.9 98.54l12.32-21.28a43.142 43.142 0 0 0 21.19-25.76h4.36a5.008 5.008 0 0 0 5-5v-6.46a5 5 0 0 0-5-5zm-8.87-3.54a1 1 0 0 1 1 1v2.54H85.95V31.5zm-29.58-6.86H93.5a1.43 1.43 0 1 1 0 2.86H71.32a1.43 1.43 0 1 1 0-2.86zM66 31.5h15.95v3.54H66zm-4 0v3.54H46.05V31.5zm-27.5-6.86h22.18a1.43 1.43 0 0 1 0 2.86H34.5a1.43 1.43 0 1 1 0-2.86zm-8.4 7.86a1 1 0 0 1 1-1h14.95v3.54H26.1zm36.4 49.76q.75.03 1.5.03t1.5-.03l-1.5 2.6zm-7.84 38.06a2.818 2.818 0 0 1-4.88-2.82l8.68-15.03 3.25 5.65zm23.56-2.82a2.818 2.818 0 0 1-4.88 2.82L50.05 79.98a42.545 42.545 0 0 0 7.56 1.83zm-8.65-23-3.26-5.63 4.06-7.03.02-.03a42.336 42.336 0 0 0 7.56-1.83zM64 78.29A39.251 39.251 0 0 1 26.78 51.5h74.44A39.251 39.251 0 0 1 64 78.29zm46.77-31.79a1 1 0 0 1-1 1H18.23a1 1 0 0 1-1-1v-6.46a.99.99 0 0 1 1-1h91.54a.99.99 0 0 1 1 1zM62.812 17.562c-1.488-1.231 0-2.86 0-2.86a2.211 2.211 0 0 0 .086-2.557l-.961-1.245a6.246 6.246 0 0 1 .009-7.363l.467-.6a2 2 0 1 1 3.157 2.456l-.466.6a2.279 2.279 0 0 0 0 2.462l.959 1.245a6.2 6.2 0 0 1-.393 7.8 2.143 2.143 0 0 1-2.858.062zM48.408 17.56c-1.408-1.26.007-2.86.007-2.86a2.209 2.209 0 0 0 .081-2.553l-.96-1.244a6.246 6.246 0 0 1 .008-7.363l.466-.6a2 2 0 0 1 3.159 2.454l-.466.6a2.278 2.278 0 0 0 0 2.463l.958 1.243a6.2 6.2 0 0 1-.392 7.8 2.061 2.061 0 0 1-2.861.06zM77.213 17.562a2.079 2.079 0 0 1 0-2.86 2.209 2.209 0 0 0 .086-2.558l-.96-1.244a6.244 6.244 0 0 1 .009-7.363l.465-.6a2 2 0 0 1 3.159 2.454l-.466.6a2.278 2.278 0 0 0 0 2.463l.958 1.246a6.2 6.2 0 0 1-.392 7.8 1.988 1.988 0 0 1-2.859.062z" />
    </svg>
  );
};
