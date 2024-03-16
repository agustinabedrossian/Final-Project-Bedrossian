function CartItem({product}) {
    console.log(product)
    return <div>
        <div class="columns is-vcentered is-multiline">
                <div class="column is-6-desktop is-7-tablet mb-6 mb-0-tablet">
                  <div class="columns is-vcentered is-multiline">
                    <div class="column is-4-tablet mb-3">
                      <div class="is-flex has-background-light is-justify-content-center is-align-items-center">
                        <img class="image is-fullwidth" src={product.img} alt=""/>
                      </div>
                    </div>
                    <div class="column is-8">
                      <h3 class="subtitle mb-2 has-text-weight-bold">{product.title}</h3>
                      <p class="mb-0 has-text-grey">{product.description}</p>
                    </div>
                  </div>
                </div>
                <div class="column is-2 is-hidden-touch">
                  <p class="subtitle has-text-info mb-0 has-text-weight-bold">${product.price}</p>
                </div>
                <div class="column is-2">
                  <p class="subtitle has-text-info has-text-weight-bold">{product.quantity}</p>
                </div>
                <div class="column is-2">
                  <p class="subtitle has-text-info has-text-weight-bold">${product.price * product.quantity}</p>
                </div>
              </div>
    </div>
}

export default CartItem;