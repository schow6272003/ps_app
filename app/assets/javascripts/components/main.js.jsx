class Main extends React.Component {
    constructor(props) {
         super(props)
         this.state = {
           headers: [{name:"Zip Code", key: "zip_code"}, {name:"CBSA Code", key: "cbsa_id"}, 
                            {name: "MSA Name", key: "name" }, {name:"Pop 2014", key: "2014"}, {name:"Pop 2015", key: "2015"} ], 
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
        var hashHistory = window.ReactRouterDOM.hashHistory;
        return (
            <Router>
                <div>
                {/* <nav className="col-md-1 d-none d-md-block bg-light sidebar">
                  <ul>
                    <li><Link to="/">Search Code</Link></li>
                    <li><Link to="/table" >CBSA</Link></li>
                  </ul>
                </nav> */}
                <main className="col-md-12">
                <Route exact path="/" render={(props) => <Search {...props} title={"Text Search"} headers={this.state.headers}  />} />
                 <Route path="/table" render={(props) => <Table {...props} headers={this.state.headers} title="Basic Output" tableId="cbsa-table" />} />
                </main>
                </div>
            </Router>
        )

    }
}