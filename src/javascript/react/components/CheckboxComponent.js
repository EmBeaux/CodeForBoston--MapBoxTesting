import React from 'react'

const CheckboxComponent = (props) => {

  return (
    <div key={ props.name }>
      <label>
        { props.name }
        <input
          name= { props.show }
          type="checkbox"
          checked={ props.checked }
          onChange={ props.changeShow } />
      </label><br />
    </div>
  )
}

export default CheckboxComponent;
