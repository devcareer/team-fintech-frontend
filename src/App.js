import Button from './components/General/Button/Button';
import Input from './components/General/Input/Input';
import InputPassword from './components/General/Input/InputPassword';

function App() {
  return (
    <div className="flex flex-col gap-10 p-4 mx-auto lg:w-[632px]">
      <h1>Welcome to the fintech App</h1>
      <div className="flex flex-col gap-8 mx-auto ">
        <Input />
        <Input />
        <Input />
        <InputPassword />
        <Button>Hello world</Button>
      </div>
    </div>
  );
}

export default App;
