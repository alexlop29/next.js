// icons
import { Logo } from "@/assets/icons/Logo";

type InputProps = {
  session: string;
};

export const Success = ({ session }: InputProps) => {
  const handleBilling = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/checkout/create-portal-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            session_id: session,
          }),
        },
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <Logo />
        <div>
          <div className="text-base">
            Subscription to heart saver plan successful!
          </div>
        </div>
      </div>
      <button onClick={handleBilling}>Manage your billing information.</button>
    </>
  );
};
