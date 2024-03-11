import vocabularyArray from "../libs/vocabulary";
import {Button} from "antd-mobile";
import './layout.less'

function layout() {
    return (
        <div className="layout">
            <ul>
                {vocabularyArray.map(item =>
                    <li style={{fontWeight: item.bold ? 700 : 400}} key={item.label}>
                        {item.label}
                        <Button className="addBtn" color='primary' fill='solid'>
                            Solid
                        </Button>
                        {/*<button className={'addBtn'}>add</button>*/}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default layout
