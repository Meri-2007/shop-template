import { useState } from 'react'

import './App.css'

function App() {
  const [products, setProducts] = useState([
    { id: 101, name: "Psychology", price: 27000, pic: "https://m.media-amazon.com/images/I/81LDP+GDKVL._AC_UF1000,1000_QL80_.jpg" },
    { id: 102, name: "Biology", price: 28000, pic: "https://cdn.gramedia.com/uploads/items/THE_BIOLOGY_BOOK.jpg" },
    { id: 103, name: "Poetry", price: 30000, pic: "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/9/7/9780241566237.jpg" },
    { id: 104, name: "Literature", price: 27500, pic: "https://images.booksense.com/images/015/491/9781465491015.jpg" },
    { id: 105, name: "History", price: 17000, pic: "https://bookazine.com.hk/cdn/shop/products/68fa1af4cb73f919f620253ca990118e.jpg?v=1589010646" },
    { id: 106, name: "Math", price: 20000, pic: "https://images.booksense.com/images/248/480/9781465480248.jpg" },
    { id: 107, name: "Architecture", price: 22000, pic: "https://imusic.b-cdn.net/images/item/original/030/9780241415030.jpg?dk-2023-the-architecture-book-big-ideas-simply-explained-dk-big-ideas-hardcover-book&class=scaled&v=1652302004" },
    { id: 108, name: "Mythology", price: 26000, pic: "https://m.media-amazon.com/images/I/51kqFMWL7JL._SY580_.jpg" },

  ])
  const [basket, setBasket] = useState([])
  const moveToCart = prod => {
    const result=basket.find(x=>x.id==prod.id)
    if(result){
      result.count++
      setBasket([...basket])
    }else{
      setBasket([...basket,{...prod,count:1}])
    }
  }
  const addCount= id=>{
    const bask=basket.map(item=>{
      if(item.id===id){
        item.count+=1
      }
      return item
    })
    setBasket(bask)
  }
  const reduceCount=id=>{
    const bask=basket.map(item=>{
      if(item.id===id&&item.count>1){
        item.count-=1
      }
      return item
    })
    setBasket(bask)
  }
  const removeProduct=id=>{
    const bask=basket.filter(item=>item.id!=id)
      setBasket(bask)
  }
 

  return (
    <>

      <h1>Online shop</h1>
      <div className='content'>
        <div>
          <h3>Products</h3>
          <div className='list'>
            {
              products.map(prod => <div key={prod.id}>
                <img src={prod.pic} />
                <p>{prod.name}</p>
                <strong>{prod.price}AMD</strong>
                <button onClick={() => moveToCart(prod)}>move</button>
              </div>)
            }
          </div>
        </div>
        <div><h3>Cart</h3>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>price</th>
                <th>count</th>
                <th>subtotal</th>
                <th> actions</th>
              </tr>
            </thead>
            <tbody>
              {
                basket.map(item => <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td> {item.count}</td>
                  <td>{item.count * item.price}</td>
                  <td>
                  <button onClick={() => addCount(item.id)}>+</button>
                  <button onClick={() => reduceCount(item.id)}>-</button>
                  <button onClick={() =>removeProduct(item.id)}>x</button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default App
