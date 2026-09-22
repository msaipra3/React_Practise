import './App.css'

function App() {
  return (
    <div className="app">



      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">MyApp</h2>

        <nav>
          <div className="nav-item active">
            🏠
            <span>Dashboard</span>
          </div>

          <div className="nav-item">
            👤
            <span>Users</span>
          </div>

          <div className="nav-item">
            📊
            <span>Analytics</span>
          </div>

          <div className="nav-item">
            ⚙️
            <span>Settings</span>
          </div>

          <div className="nav-item">
            📁
            <span>Projects</span>
          </div>
        </nav>
      </aside>

      {/* Main Layout */}
      <main className="main">

        {/* Header */}
        <header className="header">
          <h1>Dashboard</h1>
          <button>Profile</button>
        </header>

        {/* Content */}
        <section className="content">
          <div className="card card-blue">
            <h3>Total Users</h3>
            <p>1,250</p>
          </div>

          <div className="card card-green">
            <h3>Revenue</h3>
            <p>₹85,000</p>
          </div>

          <div className="card card-orange">
            <h3>Projects</h3>
            <p>32</p>
          </div>

          <div className="card card-purple">
            <h3>Messages</h3>
            <p>145</p>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App