class Main extends React.Component {
    constructor(props) {
         super(props)
         this.state = {
           headers: [{name:"Zip Code", key: "zip_code"}, {name:"CBSA Code", key: "cbsa_id"}, 
                            {name: "MSA Name", key: "name" }, {name:"Pop 2014", key: "2014"}, {name:"Pop 2015", key: "2015"} ], 
         }
    }
    render () {
        return (
          <div>
            <main className="col-md-12">
              <Search title={"Text Search"} headers={this.state.headers}  />
            </main>
          </div>
        )

    }
}