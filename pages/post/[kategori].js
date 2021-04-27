import Sidebar from '../../components/sidebar'
import Menu from '../../data-dummy/menu.json'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'

export default function Kategori({props}) {
    const router = useRouter()
    const { kategori } = router.query

    return (
        <div>
        <Layout layoutProps = {props.menu}>
            <div className="row">
            <div className="col-md-8">
                <h3 className="pb-4 mb-4 fst-italic border-bottom">
                This Is Kategori Page { kategori }
                </h3>
            </div>
            <Sidebar/>
            </div>
        </Layout>
        </div>
    )
}

Kategori.getInitialProps = () => {
    return {
        props : {
        menu : Menu
        }
    }
}