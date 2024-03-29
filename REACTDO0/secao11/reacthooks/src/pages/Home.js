import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef';
import HookUseCallBack from '../components/HookUseCallBack';
import HookUseMemo from '../components/HookUseMemo';
import HookUseLayoutEffect from '../components/HookUseLayoutEffect';
import HookUseImperativeHandle from '../components/HookUseImperativeHandle';import HookConstom from '../components/HookConstom';


// useContext
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';







const Home = () => {
    const {contextValue} = useContext(SomeContext)


  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
        <h2>useContext</h2>
        <p>Valor do contexto: {contextValue}</p>
        <hr />
        <HookUseRef></HookUseRef>
        <HookUseCallBack/>
        <HookUseMemo/>
        <HookUseLayoutEffect/>
        <HookUseImperativeHandle/>
        <HookConstom/>
    </div>
  )
}

export default Home