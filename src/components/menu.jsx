import "./menu.css";
import { useEffect, useRef, useState } from "react";

export const Menu = () => {
    const [form, formData] = useState({
        title: "",
        ingredients: "",
        waiting_hour: "",
        image: "",
        instructions: ""
    });
   

    const Ref = useRef();

    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === "image") {
            value = URL.createObjectURL(Ref.current.files[0]);
        }
        formData({
            ...form,
            [name]: value
        });
    };
   

    const handleSubmit = (e) => {
        console.log(form)
        e.preventDefault();

        fetch("http://localhost:8000/profile", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "content-type": "application/json"
            }
        }).then(() => {
           
        });
    };


    return (
        <div >
            <div >
                <h1>Form</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title :
                    </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        />
                   
                    <br />
                    <br />

                    <label>
                        Ingredients :
                    </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="ingredients"
                        placeholder="Enter Ingredients"
                    />
                    <br />
                    <br />

                    <label>
                        Waiting_hour :
                    </label>
                    <input
                        onChange={handleChange}
                        type="Number"
                        name="waiting_hour"
                        placeholder="Cook time in Minutes"
                    />
                    <br />
                    <br />
                    <label> Enter Image</label>
                    <input
                        onChange={handleChange}
                        type="file"
                        ref={Ref}
                        name="image"
                        placeholder="Enter Image"
                    />

                    <br />
                    <br />

                    <label>
                        Instructions :
                    </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="instructions"
                        placeholder="Enter Instructions"
                    />
                    <br />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};