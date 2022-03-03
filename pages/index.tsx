import type { NextPage } from 'next'
import Search from "../Components/Search"

const Home: NextPage = () => {
  return (
    <div>
      <header className='text-3xl font-bold underline'>함께 만들어가는 맛집 지도</header>
      <Search/>
    </div>
  )
}

export default Home
