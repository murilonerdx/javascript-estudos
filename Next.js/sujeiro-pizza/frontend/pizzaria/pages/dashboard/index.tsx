import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head';
import styles from './styles.module.scss';

import { FiRefreshCcw } from 'react-icons/fi'
import {Header} from "../../components/ui/Header";
import React, {useEffect, useState} from "react";
import {api} from "../../services/apiClient";
import Modal from 'react-modal';
import {ModalOrder} from "../../components/ui/ModalOrder";


export type OrderItemProps = {
    id: string;
    amount: number;
    order_id: string;
    product_id: string;
    product:{
        id: string;
        name: string;
        description: string;
        price: string;
        banner: string;
    }
    order:{
        id: string;
        table: string | number;
        status: boolean;
        name: string | null;
    }
}

export default function Dashboard(){
    const [orders, setOrders] = useState([])
    const [modalItem, setModalItem] = useState<OrderItemProps[]>()
    const [modalVisible, setModalVisible] = useState(false);

    function handleCloseModal(){
        setModalVisible(false);
    }

    Modal.setAppElement('#__next');

    async function handleOpenModalView(id: string){
        const response = await api.get('/order/detail', {
            params:{
                order_id: id,
            }
        })

        setModalItem(response.data);
        setModalVisible(true);
    }


    useEffect(() => {
        api.get("/order/all").then(response => setOrders(response.data))
    }, [])

    return(
        <>
            <Head>
                <title>Painel - Sujeito Pizzaria</title>
            </Head>
            <div>
                <Header/>

                <main className={styles.container}>

                    <div className={styles.containerHeader}>
                        <h1>Últimos pedidos</h1>
                        <button>
                            <FiRefreshCcw size={25} color="#3fffa3"/>
                        </button>
                    </div>

                    <article className={styles.listOreders}>
                        {orders.map( (item, index) => {
                            return(
                                <section className={styles.orderItem} key={item.id} >
                                    <button value={index} onClick={ () => handleOpenModalView(item.id) }>
                                        <div className={styles.tag}></div>
                                        <span>Mesa {item.table}</span>
                                    </button>
                                </section>
                            )
                        })}
                    </article>

                </main>

                { modalVisible && (
                    <ModalOrder
                    />
                )}

            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {
        }
    }
})