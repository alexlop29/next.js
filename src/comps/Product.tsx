// icons
import { Logo } from "@/assets/icons/Logo";

const PRICE_LOOKUP_KEY = process.env.PRICE_LOOKUP_KEY ?? "";

export const Product = () => {
  return (
    <div>
      <div>
        <Logo />
        <div>
          <div className="text-base"> Heart Saver Subscription </div>
          <div className="text-sm">$20.00 / month</div>
        </div>
      </div>

      <form action="/create-checkout-session" method="POST">
        <input type="hidden" name="lookup_key" value={PRICE_LOOKUP_KEY} />
        <button id="checkout-and-portal-button" type="submit">
          Checkout
        </button>
      </form>
    </div>
  );
};
