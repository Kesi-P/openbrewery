import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {Provider} from "react-redux"
import {store} from '../src/Redux/store'
import Form from '../src/Components/Form'
import Datatable from '../src/Components/Datatable/Datatable'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography';
import { dataContext } from '../src/dataContext'
import { useSelector, useDispatch } from "react-redux";
import { srtBrew, srtName, srtState,srtCity } from '../src/Redux/brewActions'
import Navbar from '../src/Components/Navbar'
import React, { useState, useEffect } from "react";
import App  from './_app'
import Home from '../src/Components/Home'

//const inter = Inter({ subsets: ['latin'] })

export default function Index() {

return (
  <Provider store={store}>
    <Home />
    </Provider>

)
}