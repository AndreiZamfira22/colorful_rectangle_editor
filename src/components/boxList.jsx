import './boxList.css';

import { useSelector } from "react-redux";
import store from '../redux/store';
import { selectBox } from "../redux/actions";

export default function BoxList() {

    const boxes = useSelector((state) => state.boxes);

    return (
        <div className="box-list">
            {boxes.map((box) => (
                <div key={box.id} className="box" style={{
                    backgroundColor: `rgb(${box.r}, ${box.g}, ${box.b})`
                }} onClick={() => store.dispatch(selectBox(box))}>
                </div>
            ))}
        </div>
    );
}