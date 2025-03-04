import styled from 'styled-components'

const ProductCard = styled.div`
  width: 256px;
  height: 435px;
  border-radius: 10px;
  background: linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#ddd, #ddd), linear-gradient(#ddd, #ddd),
    linear-gradient(#ddd, #ddd);
  background-color: #fff;
  background-repeat: no-repeat;
  background-size:
    256px 220px,
    256px 130px,
    100px 15px,
    150px 15px;
  background-position:
    -256px 0,
    0 0,
    15px 200px,
    15px 230px;
  animation: loading 1.5s infinite;

  @keyframes loading {
    to {
      background-position:
        256px 0,
        0 0,
        15px 200px,
        15px 230px;
    }
  }
`

export default ProductCard
