import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateTask = ({ TaskData, handleTaskDataChange, handleCreate, EditIndex, setTaskData, initialTaskData, setEditIndex }) => {

    const navigate = useNavigate()

    return (
        <>
            <div style={{background: "linear-gradient(to bottom right, #bfdbfe, #60a5fa)"}}>
                <h1 className='text-2xl bg-gray-300 font-bold font-serif text-center p-4'>Task Management</h1>
            </div>

                <form
                    className="bg-gray-200 shadow-xl rounded-xl p-6 w-full max-w-3xl mx-auto mt-10 border"
                    onSubmit={(e) => handleCreate(e, navigate)}
                >
                    <h1 className='md:text-3xl text-gray-700 text-2xl font-semibold mb-4'>Add New Task</h1>

                    <label className='font-medium md:text-xl'>Task Title:</label>
                    <input className='my-2 p-2 bg-white border w-full'
                        type="text" required placeholder='Enter Task Title'
                        value={TaskData.Title}
                        onChange={(e) => handleTaskDataChange("Title", e.target.value)}
                    />

                    <label className='font-medium md:text-xl'>Task Description:</label>
                    <textarea className='my-2 p-2 bg-white border w-full' required
                        placeholder='Enter Task Description'
                        value={TaskData.Description}
                        onChange={(e) => handleTaskDataChange("Description", e.target.value)}
                    ></textarea>

                    <label className='font-medium md:text-xl'>Task Status:</label>
                    <select className='w-full border p-2 bg-white my-2'
                        required
                        value={TaskData.Status}
                        onChange={(e) => handleTaskDataChange("Status", e.target.value)}
                    >
                        <option value="" disabled hidden>Set Status</option>
                        <option value="Pending">Pending</option>
                        <option value="OnProcess">OnGoing</option>
                        <option value="Completed">Finished</option>
                    </select>

                    <div className="flex justify-end gap-4 mt-4">
                        <button
                            type="button"
                            className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-700 transition-transform hover:scale-105"
                            onClick={() => {
                                setTaskData(initialTaskData);
                                setEditIndex(null);
                                navigate("/home");
                            }}
                        >
                             Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-700 transition-transform hover:scale-105"
                        >
                            {EditIndex === null ? " Add" : " Update"}
                        </button>
                    </div>
                </form>
            
        </>
    )
}

export default CreateTask