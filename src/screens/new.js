import React, { Component } from 'react';

class NewOrders extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          hits: [],
          isLoading: false,
          error: null,
        };
      }
    

    componentDidMount() {
        this.setState({ isLoading: true});
    

        fetch("http://5c52eda35dcbc40014b3aca3.mockapi.io/burger/v1/burger", {
           method: 'GET',
            headers: {
            'Content-Type': 'application/json',
        }
    })
          .then(response => {

           if(response.ok){
               return response.json();
           } else {
               throw new Error('response ni aa rha');
           }
           })
          .then(data => this.setState({ hits: data, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false}));
      }

      render() {
        const { hits, isLoading, error} = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
          }
    
        return (
            <div>order
            <ul>
            {hits.map(hit =>
              <li key={hit.objectID}>
                <a href={hit.address}>{hit.name}</a>
              </li>
            )}
            </ul>
            </div>
 
        );
      }
    
    }
    export default NewOrders;
