import { useForm } from "react-hook-form"
import { addBox } from "../redux/actions"
import './boxInserter.css'
import store from '../redux/store';
import { useSelector } from "react-redux";

export default function BoxInserter() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const boxesLength = useSelector((state) => state.boxes.length);

    const handleInsert = (data) => {

        if (canAddBox(boxesLength)) {
            const newBox = {
                r: data.red,
                g: data.green,
                b: data.blue
            }
            store.dispatch(addBox(newBox));
        }

    };

    const handleRandomInsert = () => {

        if (canAddBox(boxesLength)) {
            const newBox = {
                r: Math.floor(Math.random() * 256),
                g: Math.floor(Math.random() * 256),
                b: Math.floor(Math.random() * 256)
            };
            store.dispatch(addBox(newBox));
        }

    };


    return (
        <div className="box-inserter">
            <h2>Box Inserter</h2>
            <form onSubmit={handleSubmit(handleInsert)}>
                <label>R:</label>
                <input type="number"
                    {...register("red", {
                        required: "R is required",
                        min: { value: 0, message: "Min value is 0" },
                        max: { value: 255, message: "Max value is 255" }
                    })}
                />
                <p>{errors.red?.message}</p>

                <label>G:</label>
                <input type="number"
                    {...register("green", {
                        required: "G is required",
                        min: { value: 0, message: "Min value is 0" },
                        max: { value: 255, message: "Max value is 255" }
                    })}
                />
                <p>{errors.green?.message}</p>
                <label>B:</label>
                <input type="number"
                    {...register("blue", {
                        required: "B is required",
                        min: { value: 0, message: "Min value is 0" },
                        max: { value: 255, message: "Max value is 255" }
                    })}
                />
                <p>{errors.blue?.message}</p>

                <button type="submit" id="insert">Insert</button>
                <button type="button" id="insert-random" onClick={handleRandomInsert}>Insert random</button>
            </form>
        </div>
    )
}

const canAddBox = (boxesLength) => {
    if (boxesLength < 9) {
        return true;
    }
    alert("Maximum 9 boxes allowed");
    return false;
};

