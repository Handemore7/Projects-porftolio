import React from "react";

const Project = ({ title, description, tags, imageURL, demoURL, codeURL, }) => {
    return (
        <div className="bg-white h-96 w-full rounded-2xl shadow-md flex flex-row items-center justify-center p-4">
            <div className="w-1/2">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags?.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded">{tag}</span>
                    ))}
                </div>
            </div>
            <img src={imageURL} alt={title} className="w-1/2 object-cover rounded-md ml-4" />
        </div>
    );
};

export default Project;