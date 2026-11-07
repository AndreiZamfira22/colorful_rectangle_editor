import './boxEditor.css'
import { useForm } from "react-hook-form"
import store from '../redux/store';
import { useSelector } from "react-redux";
import { updateBoxColor } from "../redux/actions";
import { useState, useEffect } from "react";

export default function BoxEditor() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm()

    const selectedBox = useSelector(state => state.selectedBox);
    const boxNumber = selectedBox?.id.replace('box-', '');
    const previewColors = watch(["red", "green", "blue"]);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (selectedBox) {
            reset({
                red: selectedBox.r,
                green: selectedBox.g,
                blue: selectedBox.b
            });
        }
    }, [selectedBox, reset]);

    const handleApplyColor = (data) => {
        store.dispatch(updateBoxColor({
            r: data.red,
            g: data.green,
            b: data.blue
        }));
    };

    if (!selectedBox) {
        return <div className="box-editor" >Select a box to edit</div>;
    }

    return (
        <div className="box-editor">
            <div className="box-editor-header">
                <h2>Box Editor</h2>
                <button type="button" id="info" onClick={() => setShowModal(true)}>Info</button>
            </div>

            <form onSubmit={handleSubmit(handleApplyColor)}>

                <div className="box-number">Box Number: {boxNumber}</div>
                <div className="box-editor-content">
                    <div className="box-editor-inputs">
                        <label>R:</label>
                        <input type="number"
                            {...register("red", {
                                required: "R is required",
                                valueAsNumber: true,
                                min: { value: 0, message: "Min value is 0" },
                                max: { value: 255, message: "Max value is 255" }
                            })}
                        />
                        <p>{errors.red?.message}</p>

                        <label>G:</label>
                        <input type="number"
                            {...register("green", {
                                required: "G is required",
                                valueAsNumber: true,
                                min: { value: 0, message: "Min value is 0" },
                                max: { value: 255, message: "Max value is 255" }
                            })}
                        />
                        <p>{errors.green?.message}</p>

                        <label>B:</label>
                        <input type="number"
                            {...register("blue", {
                                required: "B is required",
                                valueAsNumber: true,
                                min: { value: 0, message: "Min value is 0" },
                                max: { value: 255, message: "Max value is 255" }
                            })}
                        />
                        <p>{errors.blue?.message}</p>
                    </div>

                    <div className="box-editor-preview">
                        <div
                            className="preview-square"
                            style={{
                                backgroundColor: `rgb(${previewColors[0] || 0}, ${previewColors[1] || 0}, ${previewColors[2] || 0})`
                            }}
                        ></div>
                    </div>
                </div>

                <div className="box-editor-buttons">
                    <button type="submit" id="apply">Apply color</button>
                </div>

            </form>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h3>Box Details</h3>
                        <p>R: {selectedBox.r}</p>
                        <p>G: {selectedBox.g}</p>
                        <p>B: {selectedBox.b}</p>
                        <p>Box Number: {boxNumber}</p>
                        <p>Box ID: {selectedBox.id}</p>
                        <p>Creation Time: {selectedBox.creationTime}</p>
                    </div>
                </div>
            )}
        </div>
    )
}