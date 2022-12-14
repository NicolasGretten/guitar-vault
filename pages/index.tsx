import type { NextPage } from 'next'
import Layout from "./components/layout";
import HomeBody from "./components/home";

const Home: NextPage = () => {
    return (
      <Layout>
          <HomeBody />
      </Layout>
  )
}

export default Home
