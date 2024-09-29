// icons
import { Logo } from "@/assets/icons/Logo";

const PRICE_LOOKUP_KEY = "Heart_Saver-2b884b4";

export const Product = () => {
  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:3000/checkout/create-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "lookup_key": `${PRICE_LOOKUP_KEY}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      };

      const session = await response.json();
      console.log(session);
      window.location.href = session.url;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <Logo />
        <div>
          <div className="text-base"> Heart Saver Subscription </div>
          <div className="text-sm">$20.00 / month</div>
        </div>
      </div>

      <button type="submit" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};
