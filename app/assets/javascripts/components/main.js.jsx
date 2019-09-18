class Main extends React.Component {
    constructor(props) {
         super(props)
         this.state = {
           defaultHeaders: ["Zip Code", "CBSA  Code", "MSA Name", "Pop 2014", "Pop 2015" ], 
         }
    }
    componentDidMount()  {
        
    }
    render () {
        const Router = window.ReactRouterDOM.BrowserRouter;
        const Route =  window.ReactRouterDOM.Route;
        const Link =  window.ReactRouterDOM.Link;
        const Prompt =  window.ReactRouterDOM.Prompt;
        const Switch = window.ReactRouterDOM.Switch;
        const Redirect = window.ReactRouterDOM.Redirect;
        return (
            <Router>
                <div>
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                  <ul>
                    <li><Link to="/" >CBSA</Link></li>
                    <li><Link to="/name-search">Search Code</Link></li>
                  </ul>
                </nav>
                <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
                 <Route exact path="/" render={(props) => <Table {...props} headers={this.state.defaultHeaders} title="Basic Output" />} />
                 <Route path="/name-search" render={(props) => <Search {...props} title={"Text Search"} />}/>
                </main>
                </div>
            </Router>
        )

    }
}