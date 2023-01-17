import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import type {AppProps} from 'next/app'
import Layout from '../components/Layout';
import {Provider} from "react-redux";
import store from "../redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

interface myAppProps {
    Component: AppProps['Component'],
    pageProps: AppProps['pageProps'],
}

function MyApp({Component, pageProps}: myAppProps) {

    let persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Layout categories={pageProps.categories}>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider>
    )
}

export default MyApp;
