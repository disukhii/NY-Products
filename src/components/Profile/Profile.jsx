import React from 'react'
import Register from '../RegisterLogin/Register.js'
export default class Profile extends Register {

    render() {

        return (
            <div>
                <p>asdkalsdk{this.state.fullname}</p>
            </div>
        )
    }
}
