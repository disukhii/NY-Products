import React from 'react'
import Register from '../RegisterLogin/Register.js'
export default class Profile extends Register {

    render() {

        return (
            <div>
                <p>asdasdasd{this.state.fullname}</p>
            </div>
        )
    }
}
