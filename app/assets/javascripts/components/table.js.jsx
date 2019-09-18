class Table extends React.Component {
    constructor(props) {
         super(props)
         this.state  = {
              title: this.props.title,
              headers: this.props.headers,
              records: this.props.records
         }
    }
    componentDidMount() {

      this.initiateTable();
    }
    
    initiateTable(tableId)  {
      const 
        $("#dttb").dataTable();        
    }
    render () {
        return (
            <div>
                <table id="dttb" className="table table-hover">
                <thead>
                <tr>
                    {
                        this.state.headers.map((name,i) => {
                            return (
                                <th key={i}>{name}</th>
                            )
                        }, this)
                    }
        
                </tr>
                </thead>
                <tbody>
                    <tr>
                     <td>1</td>
                     <td>Joseph</td>
                     <td>Joseph</td>
                     <td>Joseph</td>
                     <td>Joseph</td>
                    </tr>
                </tbody>
            </table>

            </div>
        )
    }
}