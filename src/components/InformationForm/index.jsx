import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInformation } from "../../redux/Information/actions";

const InformationForm = () => {
    const dispatch = useDispatch();
    const [favourit, setFavourit] = useState({
        movie: '',
        drama: '',
        vegetable: '',
        fruit: '',
        color: '',
        actor: '',
        actress: ''
    });

    const handelChange = (event) => {
        const { name, value } = event.target;
        setFavourit((prev) => ({ ...prev, [name]: value }))
    }
    console.log("🚀 ~ InformationForm ~ favourit:", favourit)

    const submitData = () => {
        dispatch(addInformation({
            movie: favourit.movie,
            drama: favourit.drama,
            vegetable: favourit.vegetable,
            color: favourit.color,
            fruit: favourit.fruit,
            actor: favourit.actor,
            actress: favourit.actress,
        }))
    }

    const result = useSelector((state) => state.informationData);
    console.log("🚀 ~ InformationForm ~ result:", result)

    return (
        <div>
            <form className="flex flex-col gap-5 flex-wrap">
                <h1 className="ml-4 font-semibold text-pink-500">Write Your Favourit Things</h1>
                <div className="flex flex-col gap-4 ml-4 m">
                    <div className="flex gap-4 justify-between w-[30rem]">
                        <label>Favourit Movie</label>
                        <input type="text" onChange={handelChange} name="movie" value={favourit.movie} className="h-10 w-80 border border-pink-300 rounded-md px-2" />
                    </div>
                    <div className="flex gap-4 justify-between w-[30rem]">
                        <label>Favourit Drama</label>
                        <input type="text" onChange={handelChange} name="drama" value={favourit.drama} className="h-10 w-80 border border-pink-300 rounded-md px-2" />
                    </div>
                    <div className="flex gap-4 justify-between w-[30rem]">
                        <label>Favourit Vegetable</label>
                        <input type="text" onChange={handelChange} name="vegetable" value={favourit.vegetable} className="h-10 w-80 border border-pink-300 rounded-md px-2" />
                    </div>
                    <div className="flex gap-4 justify-between w-[30rem]">
                        <label>Favourit Fruit</label>
                        <input type="text" onChange={handelChange} name="fruit" value={favourit.fruit} className="h-10 w-80 border border-pink-300 rounded-md px-2" />
                    </div>
                    <div className="flex gap-4 justify-between w-[30rem]">
                        <label>Favourit Color</label>
                        <input type="text" onChange={handelChange} name="color" value={favourit.color} className="h-10 w-80 border border-pink-300 rounded-md px-2" />
                    </div>
                    <div className="flex gap-4 justify-between w-[30rem]">
                        <label>Favourit Actor</label>
                        <input type="text" onChange={handelChange} name="actor" value={favourit.actor} className="h-10 w-80 border border-pink-300 rounded-md px-2" />
                    </div>
                    <div className="flex gap-4 justify-between w-[30rem]">
                        <label>Favourit Actress</label>
                        <input type="text" onChange={handelChange} name="actress" value={favourit.actress} className="h-10 w-80 border border-pink-300 rounded-md px-2" />
                    </div>
                    <div className="flex justify-end w-[30rem]">
                        <button type="button" className="px-6 py-2 bg-pink-500 text-white rounded-md" onClick={submitData}>Submit</button>
                    </div>
                </div>
                <div>
                </div>

            </form>
        </div >
    )
}

export default InformationForm;