import React from 'react';
import Alert from 'react-bootstrap/Alert'

const AlertWiev = ({ text }) => {
    return (
        < Alert variant="success" style={{ width: '300px' }}>
            <Alert.Heading>Occurred the problem</Alert.Heading>
            <p>
                {text}
            </p>
            <hr />
        </Alert >
    )
}

export default AlertWiev


