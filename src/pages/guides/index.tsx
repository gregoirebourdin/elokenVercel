import React, {useState} from "react";
import axios from "axios";
import ListProducts from "@/templates/ProductPages/ListProducts";
import Meta from "@/base/meta/Meta";
import {metas} from "@/routes/metas";
import {path} from "@/routes/paths";

export default function Products({response} : {response: any}) {
    // Use state to store products
    const [products] = useState(response.data.products)

    const pages = [
        {
            name: 'Guides',
            href: path.guides.root,
            current: true,
        },
    ]

    const meta = metas.guides;

    return (
        <>
            <Meta
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
            />
            <ListProducts products={products} pages={pages} meta={meta}/>
        </>
    )
}

export async function getServerSideProps({ req, res }) {
    // Write code here
    // Call Gumroad API to get products with axios https://api.gumroad.com/v2/products
    const response = await axios.get('https://api.gumroad.com/v2/products', {
        params: {
            access_token: process.env.NEXT_PUBLIC_GUMROAD_TOKEN,
        }
    })
  return {
    props: {
        response : JSON.parse(JSON.stringify(response))
    },
  }
}