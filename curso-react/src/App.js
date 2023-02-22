import Home from './components/Home';
import Card from './components/Card';

function App() {

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <Card>
      <Home src={'https://cdn-icons-png.flaticon.com/512/5003/5003738.png'} 
        size={300} />
      </Card>
    </div>
  );
}

export default App;

