import React, { useState } from 'react'
import vocabularyArray from "../libs/vocabulary";
import {Button, Modal} from "antd-mobile";
import './layout.less'
import FormContent from './formContent';


function Layout() {
    const [visible, setVisible] = useState(false)
    const [list, setList] = useState(vocabularyArray)
    const changeVisible = (index: number) => {
        const updateList = [...list]
        updateList.forEach((item, i)=> {
            if(i === index) item.explainVisible = !item.explainVisible 
        })
        setList(updateList)
    }

    return (
        <div className="layout">
            <Modal
                forceRender={true}
                content={FormContent()}
                visible={visible}
                showCloseButton
                onClose={() => {
                    setVisible(false)
                }}
                closeOnAction>
            </Modal>
            <ul className="list">
                {list.map((item, index) =>
                    <li style={{fontWeight: item.bold ? 700 : 400}} key={item.label}>
                        <label htmlFor="">{item.label}</label>
                        {item.explainVisible ? <span style={{marginLeft: '10px'}}>{item.explain}</span> : null}
                        <Button onClick={() => changeVisible(index)} color='primary' className={'addBtn'}>
                            {item.explainVisible ? '隐藏' : '显示'}
                        </Button>
                    </li>)
                }
            </ul>
            {/*<Button onClick={() => {setVisible(true)}} color="primary">add</Button>*/}
        </div>
    )
}

export default Layout
