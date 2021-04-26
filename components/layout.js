import Header from './header'
import Footer from './footer'

export default function Layout({children, layoutProps}) {
    return (
        <div>
            <Header menu = {layoutProps} />
            <main className="container">
                {children}
            </main>
            <Footer/>
        </div>
    )
}