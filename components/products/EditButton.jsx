import React from 'react'

const EditButton = ({updateProduct}) => {
  return (
    <div>
      <button
            id={'button'}
            onClick={updateProduct}
            className="w-full md:order-2 bg-white/20 rounded-md py-2"
        >
            Edit
        </button>
    </div>
  )
}

export default EditButton
