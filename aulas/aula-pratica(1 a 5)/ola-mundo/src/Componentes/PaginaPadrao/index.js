import { Outlet } from 'react-router';
import Banner from '../Banner';
import './PaginaPadrao.module.css'


const PaginaPadrao = () => {
    return (
        <main>
            <Banner />

            <Outlet/>
        </main>
    )
};

export default PaginaPadrao