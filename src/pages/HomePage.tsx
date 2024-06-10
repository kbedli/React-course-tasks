export const HomePage = () => {
  return (
    <h1 className="dark: text-slate-300">
      Hello from Home! {import.meta.env.VITE_AIRTABLE_API_TOKEN_CLOTHES}
    </h1>
  );
};
