// icons
import { Logo } from "@/assets/icons/Logo";

type InputProps = {
  session: string;
}

export const Success = ({ session }: InputProps) => {
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
      <form action="/checkout/create-portal-session" method="POST">
        <input
          type="hidden"
          id="session-id"
          name="session_id"
          value={session}
        />
        <button id="checkout-and-portal-button" type="submit">
          Manage your billing information.
        </button>
      </form>
    </>
  );
};
