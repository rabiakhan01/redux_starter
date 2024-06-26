import { connect } from "react-redux";
import Cart from '../components/Cart';
import { addToCart } from '../services/actions'
const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);