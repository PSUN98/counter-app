import React, { Component } from 'react';//type imrc + tab = import react component

class Counter extends Component { //type cc + tab = create class
   //props=data we give to a component/ read only
   //state=data that is local/internal to a component (other components cannot access)
   // state={
        //value:this.props.counter.value
        //tags: ['tag1', 'tag2', 'tag3']

    //};//state object includes any data that this component needs
   
    //constructor(){//so that handleIncrement has access to this
    //    super();
    //    this.handleIncrement=this.handleIncrement.bind(this);
    //}

    //handleIncrement = () => {
    //    this.setState({value: this.state.value +1});
    //    console.log('Increment clicked');
        //obj.method();
        //function();
    //};

    //dohandleIncrement = () => {
    //    this.handleIncrement({id:1});
    //};

    //renderTags() {
    //    if (this.state.tags.length===0) return <p>there are no tags</p>;
    //    return  <ul>
    //    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    //</ul>;
    //};

 

    render() { 
        console.log(this.props);//props refer to value and id defined in counters

        //react.createElement only take 1 object as argument. h1 and button must be wrapped in div.
        //m-2 is margin 2
        //btn-sm is small
        //btn-danger is red
        //badge-primary=blue
        //badge-warning=yellow
        //{ } to render something dynamically


        return (//use map method to render a list of item. Key must be unique
        <React.Fragment> 
            {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                //onClick={this.handleIncrement} //use ()=> when u want to pass this.<> into function
                onClick={()=> this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btm-sm"
                >
                Increment
            </button>
            <button onClick={ ()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            

        </React.Fragment>
        //{this.state.tags.length ===0 && <p>Please create new tag</p>}
        //{this.renderTags()}

        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    };

    formatCount() {//function to return zero as a string
        //const {value: count} = this.state;
        const {value} =this.props.counter;
        return value === 0 ? 'Zero' : value;//h1 expressions behaves like a normal js object, it can be passed thru function etc.

    };
}
 
export default Counter;