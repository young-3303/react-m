import React, {useEffect, useRef, useState} from 'react'
import { Button, Image, Modal, Tabs } from "antd-mobile";
import './layout.less'
import FormContent from './formContent';
import {DownOutline, EyeInvisibleOutline, EyeOutline, UpOutline} from 'antd-mobile-icons'
import {shuffleArray} from "@/utils";
import {Vocabulary} from "@/types/types.ts";
import topIcon from '@/assets/icons/top.svg'

const Layout: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [list, setList] = useState<Vocabulary []>([])
  const [tabItem] = useState<{ key: string; title: string }[]>([
    {key: '1', title: 'G1'},
    {key: '2', title: 'G2'},
    {key: '3', title: 'G3'},
    {key: '4', title: 'G4'},
    {key: '5', title: 'G5'},
    {key: '6', title: 'G6'}
  ])
  const [isReArrange, changeArrange] = useState<boolean>(false)
  const listContent = useRef<HTMLUListElement>(null)
  const [scrollTop, setScrollTop] = useState<number>(0)
  const changeVisible = (index: number) => {
    const updateList = [...list]
    updateList.forEach((item, i) => {
      if (i === index) item.explainVisible = !item.explainVisible
    })
    setList(updateList)
  }
  const changeAllVisible = (flag: 'show' | 'hidden') => {
    const updateList = [...list]
    updateList.forEach(item => {
      item.explainVisible = flag === 'show'
    })
    setList(updateList)
  }
  const layout = useRef<HTMLDivElement>(null)
  const childRef = useRef<React.ElementRef<typeof FormContent>>(null)
  const tabChange = (key: string) => {
    window.localStorage.setItem('tabKey', key)
    import(`../libs/vocabulary${key}.ts`).then((res) => {
      res.default.forEach((item: Vocabulary) => {
        item.bold = false
      })
      setList(res.default)
    })
  }
  const handleScroll = () => {
    setScrollTop(listContent.current?.scrollTop || 0)
  }
  const backTop = () => {
    listContent.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    tabChange(window.localStorage.getItem('tabKey') || '1')
    listContent.current?.addEventListener('scroll', handleScroll)
    return () => {
      listContent.current?.removeEventListener('scroll', handleScroll)
    }
  }, []);
  useEffect(() => {
    if (isReArrange) {
      setList(shuffleArray(list))
    }
  }, [isReArrange, list]);
  return (
    <>
      <div className="layout" ref={layout}>
        <div className="action-bar">
          <EyeOutline onClick={() => changeAllVisible('show')} fontSize={24} />
          <EyeInvisibleOutline onClick={() => changeAllVisible('hidden')} fontSize={24} />
          {isReArrange ? <UpOutline onClick={() => changeArrange(false)} fontSize={24} /> : <DownOutline onClick={() => changeArrange(true)} fontSize={24} />}
        </div>
        <div className="back-top" onClick={backTop} style={{opacity: scrollTop > 100 ? 1 : 0}}>
          <Image src={topIcon} width={30} />
        </div>
        <Modal
          forceRender={true}
          content={<FormContent name={"hala"} ref={childRef}/>}
          visible={visible}
          showCloseButton
          onClose={() => {
            setVisible(false)
          }}
          closeOnAction>
        </Modal>
        <Tabs defaultActiveKey={window.localStorage.getItem('tabKey') || '1'} onChange={tabChange}>
          {tabItem.map((tab, index) =>
            <Tabs.Tab title={tab.title} key={index + 1}>
              <ul id="list" className="list" ref={listContent}>
                {list.map((item, i) =>
                  <li style={{fontWeight: item.bold ? 700 : 400}} key={i}>
                    <label htmlFor="">{item.label}</label>
                    {/*{item.explainVisible ? <span style={{marginLeft: '10px'}}>{item.explain}</span> : null}*/}
                    <span style={{
                      marginLeft: '10px',
                      display: item.explainVisible ? 'inline' : 'none'
                    }}>{item.explain}</span>
                    <Button
                      onClick={() => changeVisible(i)}
                      color='primary'
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
