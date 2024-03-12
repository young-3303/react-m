import vocabularyArray from "../libs/vocabulary";
import {Button} from "antd-mobile";
import './layout.less'

function layout() {
    return (
        <div className="layout">
            <ul>
                {vocabularyArray.map(item =>
                    <li style={{fontWeight: item.bold ? 700 : 400}} key={item.label}>
                        <label htmlFor="">{item.label}</label>
                        <span style={{marginLeft: '10px'}}>hala</span>
                        <Button color='primary' className={'addBtn'}>显示</Button>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default layout
