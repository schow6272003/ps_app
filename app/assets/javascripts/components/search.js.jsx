class Search extends React.Component {
    constructor(props) {
         super(props)
         this.state  = {
              title: this.props.title
         }
    }

    componentDidMount() {
        console.log("hello");
        console.log(this.props);
    }

    render () {
        return (<h1>{this.state.title}</h1>)
    }
}