import React from 'react';
import Rx from 'rx-lite';
import api from './api';


const actions = new Rx.Subject();

const results = actions.flatMapLatest(function(action) {
  return Rx.Observable.fromPromise(api.getBody(action.id));
});

const NewsHeader = ({body}) => <p className="lead">Header {body}</p>;

const NewsItem = (onSelect, {id, header}) => <li><a href="#" onClick={onSelect.bind(undefined, id)}>Item {id} - {header}</a></li>;

const NewsList = ({list, onSelect}) => <div>{list.map(NewsItem.bind(undefined, onSelect))}</div>;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.state = {headers: []};

    var component = this;
    results.subscribe(function(body) {
      component.setState({body});
    });
  }

  componentDidMount() {
   api.getHeaders().then((headers) => this.setState({headers}))
  }

  onSelect(id) {
    actions.onNext({id})
  }

  render() {
    return (
      <div className="container">
        <NewsHeader body={this.state.body}/>
        <NewsList list={this.state.headers} onSelect={this.onSelect}/>
      </div>
    );
  }
}
