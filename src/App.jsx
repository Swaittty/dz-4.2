import UserList from './components/UserList.jsx';

function App() {
    return (
        <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Карточки пользователей</h1>
            <UserList />
        </div>
    );
}

export default App;