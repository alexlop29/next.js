import { ProvidersStore } from "@/stores/Provider";

const store = new ProvidersStore();

const page = () => {
  return (
    <div>
        {store.profiles.map((profile, index) => (
          <div key={index}>{JSON.stringify(profile)}</div>
        ))}
    </div>
  )
};

export default page;
