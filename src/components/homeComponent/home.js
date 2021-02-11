import React, {Component} from 'react';
import { Button } from 'reactstrap';

class Home extends Component {

    /*
    * This method returns the react component
    *
    * @params: ()
    * returns: <div></div>
    *
     */
    render() {
        return (
            <div className={"container-fluid "}>
                <div className={"row mt-5 justify-content-center"}>
                This is home component.
                <Button color="danger">Danger!</Button>
                </div>
            </div>
        );
    }
}

export default Home;
