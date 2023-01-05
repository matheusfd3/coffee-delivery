import { coffeeMenuData } from '../../../../util/coffeeMenuData'
import { CoffeeMenuItem } from '../CoffeeMenuItem'
import { CoffeeMenuContainer } from './styles'

export function CoffeeMenu() {
  return (
    <CoffeeMenuContainer>
      {coffeeMenuData.map((coffee) => (
        <CoffeeMenuItem
          key={coffee.id}
          id={coffee.id}
          imageName={coffee.imageName}
          tags={coffee.tags}
          title={coffee.title}
          description={coffee.description}
          price={coffee.price}
        />
      ))}
      {/* <CoffeeMenuItem
        id={1}
        imageName="asdasda"
        tags={['sdfsdf']}
        title="sdfsdfs sdf sdfsd"
        description="sdfsd fsdfsd fsdfsdfsdf sdfsdfsdfsdfsdfsdfsd"
        price={1}
      ></CoffeeMenuItem> */}
    </CoffeeMenuContainer>
  )
}
