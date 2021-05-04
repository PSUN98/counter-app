import React, { Component } from 'react';
import Counter from './counter';


//to add multiple counter component in counters
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };




    handleAdd = counter => {
        if (this.state.counters.length > 0) {
            var index;
            index = this.state.counters[this.state.counters.length - 1].id + 1;
        }
        if (this.state.counters.length === 0) {
            var index;
            index = 1;
        }

        //console.log(index);

        const counters = this.state.counters.concat(
            { id: index, value: 0 }

        );
        this.setState({ counters });
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];//... to clone 
        const index = counters.indexOf(counter);
        //counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    }
    handleDecrease = counter => {

        const counters = [...this.state.counters];//... to clone 
        const index = counters.indexOf(counter);
        //counters[index] = { ...counter };
        if (counters[index].value > 0) {
            counters[index].value--;
        }

        this.setState({ counters });
    }
    handleReset = () => {
        //const counters = this.state.counters.map(c=> {
        //    c.value=0;
        //    return c;
        //})

        const counters = [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
        this.setState({ counters: counters });
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        //console.log('Event Handler called', counterId);
        this.setState({ counters: counters });//override with const counters
    };

    totalCount = () => {
        let sum = 0;
        var i;
        for (i = 0; i < this.state.counters.length; i++) {
            sum = sum + this.state.counters[i].value
        };
        return sum;



    }





    render() {
        return (
            <div>
                <span className="badge m-2 badge-primary">{this.totalCount()}</span>

                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>

                <button
                    onClick={this.handleAdd}
                    className="btn btn-primary btn-sm m-2">Add</button>


                {this.state.counters.map(counter =>
                    <Counter //props:
                        key={counter.id} //use internally in react counter cannot access
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrease={this.handleDecrease}
                        counter={counter}
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