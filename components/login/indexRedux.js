import { connect } from 'react-redux'
import Login from './index'



function mapStateToProps(state) {
    return { loginConfirm: state.login }
}

function mapDispatchToProps(dispatch) {
    return {

        onIncreaseSubmit: function (user, rdv) {
            dispatch({ type: 'loginConfirm', login: user.isLog, nom: user.nom, prenom: user.prenom, telephone: user.telephone })
            dispatch({ type: 'rdvList', rdv})
        }
    }
}

const LoginRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);


module.exports = LoginRedux;