import { connect } from "react-redux";
import Cart from '../components/Cart';
import { addToCart, removeToCart } from '../services/actions';

const mapStateToProps = state => ({
    cartData: state.cartItems
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);