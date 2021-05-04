import React, { Component } from 'react';
import Counter from './counter';


//to add multiple counter component in counters
class Counters extends Component {
    state = {  
        counters: [
            {id: 1, value:0},
            {id: 2, value:0},
            {id: 3, value:0},
            {id: 4, value:0}
        ]
    };

    oldState = {  
        counters: [
            {id: 1, value:0},
            {id: 2, value:0},
            {id: 3, value:0},
            {id: 4, value:0}
        ]
    };
    

    handleAdd = counter => {

        let index=this.state.counters[this.state.counters.length -1].id +1;

        console.log(index);

        const counters = this.state.counters.concat(
            {id: index, value:0}

        );

        this.setState({counters});
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];//... to clone 
        const index= counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value++;
        this.setState({counters});
    }
    handleReset = () => {
        //const counters = this.state.counters.map(c=> {
        //    c.value=0;
        //    return c;
        //})
        const counters=[...this.oldState.counters]
        this.setState({counters});
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter( c => c.id !== counterId);
        //console.log('Event Handler called', counterId);
        this.setState({counters: counters});//override with const counters
    };

 





    render() { 
        return ( 
        <div>
            <button 
                onClick={this.handleReset}
                className="btn btn-primary btn-sm m-2">Reset</button>

            <button 
                onClick={this.handleAdd}
                className="btn btn-primary btn-sm m-2">add</button>

            {this.state.counters.map(counter => 
                <Counter //props:
                    key={counter.id} //use internally in react counter cannot access
                    onDelete={this.handleDelete} 
                    onIncrement={this.handleIncrement}
                    counter = {counter}
                   // value={counter.value} 
                   // id={counter.id}
                    >
                    
                        <h4>Item #{counter.id}</h4>
                    
                </Counter>  
                )}


        </div> 
        );
    }
}
 
export default Counters;