import React from 'react';
import { Alert, Collapse } from 'react-bootstrap';

export default class Toast extends React.Component {
    componentDidUpdate() {
        const { showing, onDismiss } = this.props;
        if (showing) {
            clearTimeout(this.dismissTimer);
            this.dismissTimer = setTimeout(onDismiss, 5000); //Call the onDismiss function after 5000ms has passed
        }
    }

    componentWillUnmount() {
        clearTimeout(this.dismissTimer);
    }

    render() {
        const {
            showing, bsStyle, onDismiss, children,
        } = this.props;
        return (
            <Collapse in={showing}>
                <div style={{
                    position: 'fixed', bottom: 20, left: 20, zIndex: 10,
                }}
                >
                    <Alert bsStyle={bsStyle} onDismiss={onDismiss}> {/*The children props represents whatever message the alert should show*/}
                        {children}
                    </Alert>
                </div>
            </Collapse>
        );
    }
}
