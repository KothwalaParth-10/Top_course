
import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    function filterhandler(title) {
        props.setCategory(title)
    }

    return (
        <div className="w-11/12 mx-auto flex flex-wrap max-w-max space-x-4 gap-y-4 py-4 justify-center">
            {
                filterData.map((data) => {
                    return <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 transition-all duration-300 ${category === data.title?"bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}`}
                        onClick={() => {
                            filterhandler(data.title)
                        }} key={data.id}>{data.title}</button>
                })
            }
        </div>
    )
}

export default Filter