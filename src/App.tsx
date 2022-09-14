type AppProps = {
  message: string;
};

const App = ({ message }: AppProps) => {
  return <h1 className="text-3xl font-bold underline">{message}</h1>;
};

export default App;
