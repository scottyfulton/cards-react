import React from 'react';

export default function Card(props) {
    return (
        <div className = 'card' onClick = {props.onClick}>
            {props.data}
            {'Hello'}
        </div>
    )
}