import {useState} from 'react'
import vocabularyArray from "../libs/vocabulary";
import vocabularyArray2 from "../libs/vocabulary2";
import {Button, Modal, Tabs} from "antd-mobile";
import './layout.less'
import FormContent from './formContent';


function Layout() {
  const [visible, setVisible] = useState<boolean>(false)
  const [list, setList] = useState(vocabularyArray)
  const changeVisible = (index: number) => {
    const updateList = [...list]
    updateList.forEach((item, i) => {
      if (i === index) item.explainVisible = !item.explainVisible
    })
    setList(updateList)
  }
  const tabChange = (key: string) => {
    switch (key) {
      case '1':
        setList(vocabularyArray)
        break;
      case '2':
        setList(vocabularyArray2)
        break;
    }
  }
  const tabItem: Array<{ key: string; title: string }> = [
    {key: '1', title: 'G1'},
    {key: '2', title: 'G2'}
  ]
  return (
    <>
      <div className="layout">
        <Modal
          forceRender={true}
          content={<FormContent/>}
          visible={visible}
          showCloseButton
          onClose={() => {
            setVisible(false)
          }}
          closeOnAction>
        </Modal>
        <Tabs onChange={tabChange}>
          {tabItem.map(tab =>
            <Tabs.Tab title={tab.title} key={tab.key}>
              <ul className="list">
                {list.map((item, index) =>
                  <li style={{fontWeight: item.bold ? 700 : 400}} key={item.label}>
                    <label htmlFor="">{item.label}</label>
                    {/*{item.explainVisible ? <span style={{marginLeft: '10px'}}>{item.explain}</span> : null}*/}
                    <span style={{
                      marginLeft: '10px',
                      display: item.explainVisible ? 'inline' : 'none'
                    }}>{item.explain}</span>
                    <Button onClick={() => changeVisible(index)} color='primary'
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
