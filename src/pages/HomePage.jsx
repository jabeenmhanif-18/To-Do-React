import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = ({ TaskTableData, handleEdit, handleDelete }) => {

    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState("")

    // filter tasks by title
    const filteredTasks = TaskTableData.filter(task =>
        task.Title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <>
            <div style={{ background: "linear-gradient(to bottom right, #bfdbfe, #60a5fa)" }}>
                <h1 className='text-2xl bg-gray-300 font-bold font-serif text-center p-4'>Task Management</h1>
            </div>

            <div className='p-6 flex justify-between items-center w-full max-w-3xl mx-auto'>
                <div className='flex items-center border rounded-lg w-[60%] md:w-[80%]'>
                    <p className='text-2xl pl-2'>⌕</p>
                    <input
                        type="text"
                        placeholder='Enter Your Task Here...'
                        className='p-2 focus:outline-0 w-full'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <button className=" bg-red-400 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition"
                    onClick={() => navigate("/task")}> Add New Task
                </button>
            </div>

            <div className="w-full max-w-3xl mx-auto overflow-x-auto">
                <table className="w-full border min-w-[700px] md:min-w-0">
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='p-2 border hover:bg-blue-200 transition'>Task</th>
                            <th className='p-2 border hover:bg-blue-200 transition'>Description</th>
                            <th className='p-2 border hover:bg-blue-200 transition'>Status</th>
                            <th className='p-2 border hover:bg-blue-200 transition'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* Show "No results found" */}
                        {filteredTasks.length === 0 && (
                            <tr>
                                <td
                                    colSpan="4"
                                    className='text-center p-4 text-gray-500 font-medium'
                                >
                                    Empty!!
                                </td>
                            </tr>
                        )}

                        {/* Render filtered tasks */}
                        {filteredTasks.map((data, idx) => (
                            <tr key={idx}>
                                <td className='p-2 border font-medium'>{data.Title}</td>
                                <td className='p-2 border font-medium'>{data.Description}</td>
                                <td className="p-2 border font-medium">
                                    {data.Status === "Pending" && "Pending"}
                                    {data.Status === "OnProcess" && "In Progress"}
                                    {data.Status === "Completed" && "Completed"}
                                </td>

                                <td className='p-2 border text-center'>
                                    <button
                                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-transform hover:scale-105'
                                        onClick={() => handleEdit(idx, navigate)}
                                    >
                                        Edit 
                                    </button>

                                    <button
                                        className='bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-600 transition-transform hover:scale-105'
                                        onClick={() => handleDelete(idx)}
                                    >
                                        Delete 
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table >
            </div>
        </>
    )
}

export default HomePage