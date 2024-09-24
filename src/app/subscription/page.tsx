import { useEffect, useState } from "react";

//comps
import { Product, Success, Message } from "@/comps/index";

type Message = string;
type Success = boolean;
type SessionId = string | null;

const page = () => {
  const [message, setMessage] = useState<Message>("");
  const [success, setSuccess] = useState<Success>(false);
  const [sessionId, setSessionId] = useState<SessionId>("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query?.get("success")) {
      setSuccess(true);
      setSessionId(query?.get("session_id"));
    }

    if (query?.get("canceled")) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready.",
      );
    }
  }, [sessionId]);

  if (!success && message === "") {
    return <Product />;
  } else if (success && sessionId) {
    return <Success session={sessionId} />;
  } else {
    return <Message message={message} />;
  }
};

export default page;
