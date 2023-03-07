import React from 'react'
import getConfig from 'next/config'
import { API_URL, fromImageToUrl } from '@/utils/urls'
import products from '@/products.json'
import Link from 'next/link'
import { Fetcher } from '@/lib/api'


export default function payedArticle  ( {articles , authData} ){
    console.log(articles)
    return (
        <>
            <div className='container'>
                <div className="row">
                    payedArticle
                    
                        
                    
                </div>
            </div>
        </>
    )
}
const {publicRunTimeConfig} = getConfig();

export async function getServerSideProps() {
    //login Information
    const loginInfo = {
        identifier: 'test@test.com',
        password: 'test123'
    }

    const login = await fetch(`${API_URL}/api/auth/local`, {
        method :"POST",
        headers : {
            'Accept': 'application/json',
            'content-Type': 'application/json',
        },
        body : JSON.stringify(loginInfo)
    })
    const loginResponse = await login.json()

    

    const res = await fetch(`${API_URL}/api/payed-articles/`,  {
        headers: {
            Authorization: `Bearer ${loginResponse.jwt}`
        }
    })
    const articles = await res.json()
    return {
        props : {
            articles : articles,
            authData: loginResponse,
        },
    }
}