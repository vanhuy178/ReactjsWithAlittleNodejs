import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        // {/* check xem nguoi dung login chua nều chưa thì redirect đến trang login*/ }

        const { isLoggedIn } = this.props;
        let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/login';


        return (
            <Redirect to={linkToRedirect} />
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
