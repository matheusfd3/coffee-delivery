export function Checkout() {
  return (
    <form>
      <div>
        <strong>Complete seu pedido</strong>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>
          <input type="radio" name="" id="" />
          <input type="radio" name="" id="" />
          <input type="radio" name="" id="" />
        </div>
      </div>
      <div>
        <strong>Cafés selecionados</strong>
        <div>
          <ul>
            <li></li>
          </ul>
          <div>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </div>
        </div>
        <button type="submit">Confirmar pedido</button>
      </div>
    </form>
  )
}
