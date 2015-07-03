export class <%= upCaseName %> extends.React.Component {

  static propTypes = {
    // initialCount: React.PropTypes.number.isRequired
  }

  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    console.log('<%= upCaseName %> will mount!');
  }

  componentDidMount(){
    console.log('<%= upCaseName %> has mounted');
  }

  render(){
    <div>
      <p> I am the <%= upCaseName %> Component</p>
    <div>
  }

  componentWillUnmount(){
    console.log('<%= upCaseName %> has unmounted');
  }
};
