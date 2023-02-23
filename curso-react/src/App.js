import Home from './components/Home';
import Card from './components/Card';

function App() {

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <Card>
        <Home es_admin={true} username='Agustin'/>
        <Home es_admin={false} username='Belen'/>
        <Home es_admin={true} username='Martin'/>
      </Card>
    </div>
  );
}

export default App;

