import React, {useEffect, useRef, useState} from 'react'
import vocabularyArray from "../libs/vocabulary";
import vocabularyArray2 from "@/libs/vocabulary2";
import vocabularyArray3 from "@/libs/vocabulary3";
import vocabularyArray4 from "@/libs/vocabulary4";
import {Button, Modal, Tabs} from "antd-mobile";
import './layout.less'
import FormContent from './formContent';


const Layout: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [list, setList] = useState(vocabularyArray)
  const [tabItem] = useState<{ key: string; title: string }[]>([
    {key: '1', title: 'G1'},
    {key: '2', title: 'G2'},
    {key: '3', title: 'G3'},
    {key: '4', title: 'G4'}
  ])
  const changeVisible = (index: number) => {
    const updateList = [...list]
    updateList.forEach((item, i) => {
      if (i === index) item.explainVisible = !item.explainVisible
    })
    setList(updateList)
  }
  const layout = useRef<HTMLDivElement>(null)
  const a = useRef<HTMLAnchorElement>(null)
  const tabChange = (key: string) => {
    switch (key) {
      case '1':
        setList(vocabularyArray)
        break;
      case '2':
        setList(vocabularyArray2)
        break;
      case '3':
        setList(vocabularyArray3)
        break
      case '4':
        setList(vocabularyArray4)
    }
  }
  useEffect(() => {
  }, []);
  return (
    <>
      <div className="layout" ref={layout}>
        <a style={{visibility: 'hidden'}} href="" ref={a}>click</a>
        <Modal
          forceRender={true}
          content={<FormContent  hala="made" />}
          visible={visible}
          showCloseButton
          onClose={() => {
            setVisible(false)
          }}
          closeOnAction>
        </Modal>
        <Tabs defaultActiveKey="1" onChange={tabChange}>
          {tabItem.map((tab, index) =>
            <Tabs.Tab title={tab.title} key={index + 1}>
              <ul className="list">
                {list.map((item, i) =>
                  <li style={{fontWeight: item.bold ? 700 : 400}} key={i}>
                    <label htmlFor="">{item.label}</label>
                    {/*{item.explainVisible ? <span style={{marginLeft: '10px'}}>{item.explain}</span> : null}*/}
                    <span style={{
                      marginLeft: '10px',
                      display: item.explainVisible ? 'inline' : 'none'
                    }}>{item.explain}</span>
                    <Button onClick={() => changeVisible(i)} color='primary'
                            className={'addBtn'}>
                      {item.explainVisible ? '隐藏' : '显示'}
                    </Button>
                  </li>)}
              </ul>
            </Tabs.Tab>
          )}
        </Tabs>
      </div>
    </>
  )
}
export default Layout
