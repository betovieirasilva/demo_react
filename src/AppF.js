import React from 'react';

class AppF extends React.Component {
    render() {
        return (
            <Parent>
                <div className="childA"></div>
                <div className="childB"></div>
            </Parent>
        )
    }
}


class Parent extends  React.Component {
    render(){
        // console.log(this.props.children)

        // let items = React.Children
        //         .forEach(this.props.children, child => console.log(child.props.className))

         let items = React.Children.toArray(this.props.children)

        // let items = React.Children.only(this.props.children)//apenas um elemento, se tiver mais que um vai gerar erro

        console.log(items)
        return null;
    }
}

export default AppF
