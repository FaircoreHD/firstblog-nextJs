import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Jumbotron from '../components/jumbotron'
import Article from '../components/article'
import Pagination from '../components/pagination'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import Menu from '../data-dummy/menu.json'
import Post from '../data-dummy/post.json'

export default function Home({props}) {
  return (
    <div>
      <Layout layoutProps = {props.menu}>
        <Jumbotron/>
        <div className="row">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>
            {
              props.post.map(data => (
                <Article key={data.id} post={data} />
              ))
            }
            <Pagination/>
          </div>
          <Sidebar/>
        </div>
      </Layout>
    </div>
  )
}

Home.getInitialProps = () => {
  return {
    props : {
      menu : Menu,
      post : Post
    }
  }
}